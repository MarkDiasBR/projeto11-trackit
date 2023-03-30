import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBarContainer, LogoutDiv, ContainerLogOff } from "./styled";
import { UserContext } from "../../App";
import { useTransition, animated } from "react-spring";
import { easeBackInOut } from "d3-ease";
// import { isVisible } from "@testing-library/user-event/dist/utils";

export default function NavBar() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [isVisible, setIsVisible] = useState(false)
    const transition = useTransition(isVisible, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: { duration: 100}
    });

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
        setIsVisible(v=>!v)
        console.log(isVisible)
    }

    function handleLogOff() {
        localStorage.clear();
        setUser(null);

        navigate("/", {state: {
            errorTitle: "LOGOUT EFETUADO",
            errorMessage: "Até logo! 😉",
            errorColor: "#6c3973"}})
    }

    return (
        <NavBarContainer showLogout={isVisible}>
            <Link to="/habitos">
                <p>TrackIt</p>
            </Link>
            <img src={ user.image } onClick={handleLogoutToggle} alt="User"/>
            {/* { user
            ? <img src={ user.image } alt="User"/>
            : <img src="./assets/img/profile-user-dummy.png" alt="User" /> } */}
            {/* {transition((style, item) => 
                item ? <animated.div style={style} className="item"/> : ""
            )}
            <LogoutDiv>
                <ContainerLogOff>
                    <p>sair:</p>
                    <div onClick={handleLogOff}>
                        <img src="./assets/img/LogOff.svg" alt="Sair" />
                    </div>
                </ContainerLogOff>
            </LogoutDiv> */}
            {transition((style, item) => 
                item ? 
                <animated.div style={style} className={"item"}>
                    <LogoutDiv>
                        <ContainerLogOff>
                            <p>sair:</p>
                            <div onClick={handleLogOff}>
                                <img src="./assets/img/LogOff.svg" alt="Sair" />
                            </div>
                        </ContainerLogOff>
                    </LogoutDiv>
                </animated.div>
                : ""
            )}
            


        </NavBarContainer>
    )
}