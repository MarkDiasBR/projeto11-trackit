import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBarContainer, LogoutDiv, ContainerLogOff } from "./styled";
import { UserContext } from "../../App";

export default function NavBar() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [showLogout, setShowLogout] = useState(false)

    if (localStorageUser === null) {
        localStorage.setItem("user", JSON.stringify(user))
    }
    
    useEffect(() => {
        if (!user) {
            navigate("/", {state: {
                errorTitle: "⚠️ ACESSO NÃO PERMITIDO",
                errorMessage: "Faça o login!",
                errorColor: "#F7330E"}})
        }
    }, [])

    function handleLogoutToggle() {
        setShowLogout(!showLogout)
    }

    function handleLogOff() {
        localStorage.clear();
        setUser(null);

        navigate("/", {state: {
            errorTitle: "LOGOUT EFETUADO",
            errorMessage: "Até logo! 😉",
            errorColor: "#282352"}})
    }

    return (
        <NavBarContainer showLogout={showLogout}>
            <Link to="/habitos">
                <p>TrackIt</p>
            </Link>
            <img src={ user.image } onClick={handleLogoutToggle} alt="User"/>
            {/* { user
            ? <img src={ user.image } alt="User"/>
            : <img src="./assets/img/profile-user-dummy.png" alt="User" /> } */}
            {showLogout ?
            <LogoutDiv>
                <ContainerLogOff>
                    <p>sair:</p>
                    <div onClick={handleLogOff}>
                        <img src="./assets/img/LogOff.svg" alt="Sair" />
                    </div>
                </ContainerLogOff>
            </LogoutDiv>
            : ""}            
        </NavBarContainer>
    )
}