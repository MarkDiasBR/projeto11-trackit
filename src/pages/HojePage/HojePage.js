import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import HojeCard from "../../components/HojeCard/HojeCard"
import { HojePageContainer, MainContainer, ContainerCards, ContainerHojeCards } from "./styled"


import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"
import ContentPlaceholder from "./ContentPlaceholder"
import axios from "axios"
import BASE_URL from "../../constants/url"

export const HojeHabitosContext = createContext();

export default function HojePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [carregando, setCarregando] = useState(true);
    const [hojeHabitos, setHojeHabitos] = useState([])

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
        
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(response=>{
                console.log("A")
                console.log(response.data)
                setHojeHabitos(response.data)
                setCarregando(false)
            })
            .catch(err=>console.log(err.response.data))
    }, [])

    return (
        <HojeHabitosContext.Provider value={{ hojeHabitos, setHojeHabitos }}>
            <HojePageContainer>
                <NavBar />
                <MainContainer>
                    <p>Segunda, 15/02</p>
                    <p>Nenhum hábito concluído ainda</p> 

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