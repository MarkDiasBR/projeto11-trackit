import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import HojeCard from "../../components/HojeCard/HojeCard"
import { HojePageContainer, MainContainer, ContainerCards, ContainerHojeCards } from "./styled"


import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"
import ContentPlaceholder from "./ContentPlaceholder"
import Date from "./Date"
import axios from "axios"
import BASE_URL from "../../constants/url"

export const HojeHabitosContext = createContext();

export default function HojePage() {
    const navigate = useNavigate();
    const { user, percentage, setPercentage } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [carregando, setCarregando] = useState(true);
    const [hojeHabitos, setHojeHabitos] = useState([])

    if (localStorageUser === null) {
        localStorage.setItem("user", JSON.stringify(user))
    }

    const bounceOut = ( !user || !localStorageUser );

    function atualizaPercentage(arrayDeObj) {
        if(arrayDeObj.length === 0) {
            setPercentage(0)
        } else {
            setPercentage(arrayDeObj.reduce((acum, obj) => acum + (obj.done ? 1 : 0), 0)*100/(arrayDeObj.length))
            localStorage.setItem("percentage", JSON.stringify(arrayDeObj.reduce((acum, obj) => acum + (obj.done ? 1 : 0), 0)*100/(arrayDeObj.length)))
        }            
    }

    useEffect(() => {
        setPercentage(100)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        if (bounceOut) {
            navigate("/", {state: {
                errorTitle: "⚠️ ACESSO NÃO PERMITIDO",
                errorMessage: "Faça o login!",
                errorColor: "#F7330E"}})
            return;
        }

        const config = { "headers": {"Authorization": `Bearer ${user.token}`} }
        
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(response=>{
                console.log("A")
                console.log(response.data)
                setHojeHabitos(response.data)
                setCarregando(false)
                atualizaPercentage(response.data)
            })
            .catch(err=>console.log(err.response.data))
    }, [])

    return (
        <HojeHabitosContext.Provider value={{ hojeHabitos, setHojeHabitos }}>
            <HojePageContainer>
                <NavBar />
                <MainContainer carregando={carregando} percentage={percentage}>
                    <Date />
                    {carregando ?
                    <p>Buscando hábitos...</p> :
                    <p>{(!carregando && percentage) ? `${percentage.toFixed()}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p> 
                    }
                    
                    <ContainerCards>
                        <ContentPlaceholder carregando={carregando} />
                        <ContainerHojeCards>
                            {hojeHabitos.map(habito => (
                                <HojeCard
                                    key={habito.id}
                                    id={habito.id}
                                    name={habito.name}
                                    done={habito.done}
                                    currentSequence={habito.currentSequence}
                                    highestSequence={habito.highestSequence}
                                    atualizaPercentage={atualizaPercentage}
                                />
                            ))}           
                        </ContainerHojeCards>
                    </ContainerCards>



                </MainContainer>
                <Footer />
            </HojePageContainer>
        </HojeHabitosContext.Provider>
    )
}