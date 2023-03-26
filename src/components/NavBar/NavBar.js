import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavBarContainer } from "./styled";
import { UserContext } from "../../App";

export default function NavBar() {
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(localStorageUser === null ? {} : localStorageUser);
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorageUser === null) {
            navigate("/", {state: {errorMessage: "Faça o login!"}})
        }
    }, [])

    return (
        <NavBarContainer>
            <Link to="/habitos">
                <p>TrackIt</p>
            </Link>
            
            <img src={user.image} alt={user.name}/>
        </NavBarContainer>
    )
}