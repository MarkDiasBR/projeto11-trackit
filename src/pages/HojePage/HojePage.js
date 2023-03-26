import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { HojePageContainer, MainContainer } from "./styled"

export default function HojePage() {
    return (
        <HojePageContainer>
            <NavBar />
            <MainContainer>
                <p>Segunda, 15/02</p>
                <p>Nenhum hábito concluído ainda</p>
            </MainContainer>
            <Footer />
        </HojePageContainer>
    )
}