import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { ContainerTopo, ContainerCards, HabitosPageContainer, MainContainer } from "./styled"
import NovoHabitoCard from "../../components/NovoHabitoCard/NovoHabitoCard"
import HabitoCard from "../../components/HabitoCard/HabitoCard"
import MensagemInicial from "./MensagemInicial"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"
import ContentPlaceholder from "./ContentPlaceholder"
import axios from "axios"
import BASE_URL from "../../constants/url"

export default function HabitosPage() {
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(localStorageUser === null ? {} : localStorageUser);
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        if (localStorageUser === null) {
            navigate("/", {state: {errorMessage: "Faça o login!"}})
        }
    }, [])



    // const navigate = useNavigate()
    // let localStorageUser = localStorage.getItem("user")
    // console.log(localStorageUser)



    
    // if (!localStorageUser.getItem("user")) {
    //     navigate("/", {state: {errorMessage: "Faça o login!"}})
    // }
    // const localStorageUser = JSON.parse(localStorage.getItem("user"))
    // const [user, setUser] = useState(localStorageUser === null ? {} : localStorageUser);
    // const { user } = useContext(UserContext);
    // useEffect(() => {
    //     console.log(user)
    //     if (localStorageUser === null) {
    //         navigate("/", {state: {errorMessage: "Faça o login!"}})
    //     }
    // }, [])


    
    // const [habitos, setHabitos] = useState([])
    // const config = { "headers": {"Authorization": `Bearer ${user.token}`} }

    // console.log('user :')
    // console.log(user.password)

    // useEffect(() => {
    //     axios.get(`${BASE_URL}/habits`, config)
    //         .then()
    //         .catch()
    // }, [])
    
    

    return (
        <HabitosPageContainer>
            <NavBar />
            <MainContainer>
                <ContainerTopo>
                    <p>Meus hábitos</p>
                    <button><p>+</p></button>
                </ContainerTopo>
                <ContentPlaceholder />
                <ContainerCards>
                    {/* <NovoHabitoCard /> */}
                    <MensagemInicial />
                    <HabitoCard />
                    <HabitoCard />
                    <HabitoCard />
                    <HabitoCard />
                    <HabitoCard />
                    <HabitoCard />
                </ContainerCards>
       
            </MainContainer>
            <Footer />
        </HabitosPageContainer>
    )
}