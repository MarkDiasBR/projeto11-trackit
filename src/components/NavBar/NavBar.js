import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBarContainer } from "./styled";
import { UserContext } from "../../App";

export default function NavBar() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    if (localStorageUser === null) {
        localStorage.setItem("user", JSON.stringify(user))
    }
    
    useEffect(() => {
        if (!user) {
            navigate("/", {state: {errorMessage: "Faça o login!"}})
        }
    }, [])

    return (
        <NavBarContainer>
            <Link to="/habitos">
                <p>TrackIt</p>
            </Link>
            { user
            ? <img src={ user.image } alt="User"/>
            : <img src="./assets/img/profile-user-dummy.png" alt="User" /> }
            
        </NavBarContainer>
    )
}