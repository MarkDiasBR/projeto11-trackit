import { Link } from "react-router-dom";
import { NavBarContainer } from "./styled";

export default function NavBar() {
    return (
        <NavBarContainer>
            <Link to="/habitos">
                <p>TrackIt</p>
            </Link>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg" alt="Usuário"/>
        </NavBarContainer>
    )
}