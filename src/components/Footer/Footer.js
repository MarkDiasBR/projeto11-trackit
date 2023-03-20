import { CircleContainer, FooterContainer } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const percentage = 68;

export default function Footer() {
    return (
        <FooterContainer>
            <p>Hábitos</p>
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
            
            <p>Histórico</p>
        </FooterContainer>
    )
}