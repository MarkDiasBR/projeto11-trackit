import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { HabitosPageContainer } from "./styled"

export default function HabitosPage() {
    return (
        <HabitosPageContainer>
            <NavBar />
            <div>
                <p>Meus hábitos</p>
                <button>+</button>
            </div>
                
            <Footer />
        </HabitosPageContainer>
    )
}