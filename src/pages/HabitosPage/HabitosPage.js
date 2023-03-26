import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { ContainerTopo, ContainerCards, HabitosPageContainer, MainContainer } from "./styled"
import NovoHabitoCard from "../../components/NovoHabitoCard/NovoHabitoCard"
import HabitoCard from "../../components/HabitoCard/HabitoCard"
import MensagemInicial from "./MensagemInicial"
import { useContext, useEffect } from "react"
import { UserContext } from "../../App"

export default function HabitosPage() {
    const { user } = useContext(UserContext);

    return (
        <HabitosPageContainer>
            <NavBar />
            <MainContainer>
                <ContainerTopo>
                    <p>Meus hábitos</p>
                    <button><p>+</p></button>
                </ContainerTopo>
                <ContainerCards>
                    <NovoHabitoCard />
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