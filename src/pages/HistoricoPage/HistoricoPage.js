import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { HistoricoPageContainer, MainContainer } from "./styled"
import MensagemInicial from "./MensagemInicial"

export default function HistoricoPage() {
    return (
        <HistoricoPageContainer>
            <NavBar />
            <MainContainer>
                <p>Histórico</p>
                <MensagemInicial />
            </MainContainer>
            <Footer />
        </HistoricoPageContainer>
    )
}