import { CircleContainer, FooterContainer } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../App";



export default function Footer() {
    const { percentage, setPercentage } = useContext(UserContext);
    const localStoragePercentage = JSON.parse(localStorage.getItem("percentage"))

    useEffect(() => {
        setPercentage(localStoragePercentage)
    }, [])
    

    return (
        <FooterContainer>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            
            <Link to="/hoje">
                <CircleContainer>
                    <CircularProgressbar
                        value={percentage}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        })}
                    />
                </CircleContainer>
            </Link>
            
            <Link to="/historico">
                <p>Histórico</p>
            </Link>
        </FooterContainer>
    )
}