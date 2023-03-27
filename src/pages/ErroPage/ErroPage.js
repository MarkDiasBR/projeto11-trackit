import { useLocation } from "react-router-dom";
import { ErroPageContainer, MainContainer } from "./styled"
import MensagemErro from "./MensagemErro"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function ErroPage() {
    const location = useLocation();

    return (
        <ErroPageContainer>
            <NavBar />
            <MainContainer>
                <p>ERRO 404 😵</p>
                <MensagemErro url={location.pathname}/>
            </MainContainer>
            <Footer />
        </ErroPageContainer>
    )
}