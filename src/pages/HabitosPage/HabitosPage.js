import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { ContainerTopo, ContainerCards, HabitosPageContainer, MainContainer } from "./styled"
import NovoHabitoCard from "../../components/NovoHabitoCard/NovoHabitoCard"
import HabitoCard from "../../components/HabitoCard/HabitoCard"
import MensagemInicial from "./MensagemInicial"
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"
import ContentPlaceholder from "./ContentPlaceholder"
import axios from "axios"
import BASE_URL from "../../constants/url"

export const HabitosContext = createContext();

export default function HabitosPage() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const [carregando, setCarregando] = useState(true);
    const [botaoNovoHabito, setBotaoNovoHabito] = useState(false);
    const [habitos, setHabitos] = useState([])

    if (localStorageUser === null) {
        localStorage.setItem("user", JSON.stringify(user))
    }

    const bounceOut = ( !user || !localStorageUser );

    useEffect(() => {
        if (bounceOut) {
            navigate("/", {state: {errorMessage: "Faça o login!"}})
            return;
        }
        
        const config = { "headers": {"Authorization": `Bearer ${user.token}`} }

        axios.get(`${BASE_URL}/habits`, config)
            .then(response=>{
                console.log("A")
                console.log(response.data)
                setHabitos(response.data)
                setCarregando(false)
            })
            .catch(err=>console.log(err.response.data))
    }, [])
    
    console.log(habitos.length)

    return (
        <HabitosContext.Provider value={{ habitos, setHabitos }}>
            <HabitosPageContainer>
                <NavBar />
                <MainContainer>
                    <ContainerTopo>
                        <p>Meus hábitos</p>
                        <button onClick={()=>setBotaoNovoHabito(true)}><p>+</p></button>
                    </ContainerTopo>
                    <ContainerCards>
                        <NovoHabitoCard botaoNovoHabito={botaoNovoHabito} setBotaoNovoHabito={setBotaoNovoHabito} />
                        <ContentPlaceholder carregando={carregando} />
                        {habitos.map(habito => (
                            <HabitoCard
                                key={habito.id}
                                id={habito.id}
                                name={habito.name}
                                days={habito.days}
                            />
                        ))}
                        <MensagemInicial carregando={carregando} visivel={habitos.length === 0}/>
                        
                    </ContainerCards>
        
                </MainContainer>
                <Footer />
            </HabitosPageContainer>            
        </HabitosContext.Provider>

    )
}