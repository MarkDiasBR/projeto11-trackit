import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { HistoricoPageContainer, MainContainer, StyledCalendar, ContainerCalendar } from "./styled"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"
import 'react-calendar/dist/Calendar.css'
import ContentPlaceholder from "./ContentPlaceholder"
import dayjs from "dayjs"
import BASE_URL from "../../constants/url"
import axios from "axios"
// import MensagemInicial from "./MensagemInicial"

export default function HistoricoPage() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const [carregando, setCarregando] = useState(true);
    const [history, setHistory] = useState([])

    if (localStorageUser === null) {
        localStorage.setItem("user", JSON.stringify(user))
    }

    const bounceOut = ( !user || !localStorageUser );

    function completedAllHabits(habits) {
        const doneHabits = habits.filter(h => h.done)

        return (habits.length == doneHabits.length)
    }

    const successDays = history.filter(day => completedAllHabits(day.habits))
    const failureDays = history.filter(day => !completedAllHabits(day.habits))

    function getClassName({date}) {
        const formattedDate = dayjs(date).format("DD/MM/YYYY")

        if (failureDays.find(f => f.day === formattedDate)) {
            return "failure"
        }

        if (successDays.find(f => f.day === formattedDate)) {
            return "success"
        }
    }

    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: 'smooth' })

        if (bounceOut) {
            navigate("/", {state: {errorMessage: "Faça o login!"}})
            return;
        }

        const config = { "headers": {"Authorization": `Bearer ${user.token}`} }

        axios.get(`${BASE_URL}/habits/history/daily`, config)
        .then(response=>{
            console.log("C")
            console.log(response.data)
            setHistory(response.data)
            setCarregando(false)
        })
        .catch(err=>console.log(err.response.data))
    }, [])


    

    return (
        <HistoricoPageContainer>
            <NavBar />
            <MainContainer>
                <p>Histórico</p>
                {/* <MensagemInicial /> */}
                {carregando ?

                <ContentPlaceholder carregando={carregando} /> :  
                    
                <ContainerCalendar>
                    <StyledCalendar
                        tileClassName={getClassName}
                        locale="pt-BR"
                        formatDay={(_, date)=>dayjs(date).format("DD")}                   
                    />
                </ContainerCalendar>}
            </MainContainer>
            <Footer />
        </HistoricoPageContainer>
    )
}