import { CardContainer, MainContainer, SubtitlesContainer, ImageBackground } from "./styled"
import { useContext } from "react";
import { UserContext } from "../../App";
import { HojeHabitosContext } from "../../pages/HojePage/HojePage";
import axios from "axios"
import BASE_URL from "../../constants/url"


export default function HojeCard({ id, name, done, currentSequence, highestSequence, atualizaPercentage }) {
    const { user } = useContext(UserContext);
    const { setHojeHabitos } = useContext(HojeHabitosContext);
    const config = {"headers": {"Authorization": `Bearer ${user.token}`}};

    function habitoCheckToggle() {
        console.log('esse é meu id do hábito:', id)
        console.log('esse é meu token:', user.token)
        axios.post(`${BASE_URL}/habits/${id}/${done ? "uncheck" : "check"}`,{}, config)
        .then(response=>{
            console.log("A")
            console.log(response.data)

            axios.get(`${BASE_URL}/habits/today`, config)
            .then(response=>{
                console.log("B")
                console.log(response.data)
                const myArr = [...response.data]
                console.log("myArr :",myArr)
                atualizaPercentage(myArr)
                setHojeHabitos(response.data)
                
            })
            .catch(err=>console.log(err.response.data))
        })
        .catch(err=>console.log(err.response.data))
    }

    return (
        <CardContainer>
            <MainContainer>
                <p>{name}</p>
                <SubtitlesContainer done={done} currentSequence={currentSequence} highestSequence={highestSequence}>
                    <p>Sequência atual: <span>{currentSequence} dias</span></p>
                    <p>Seu recorde: <span>{highestSequence} dias</span></p>                 
                </SubtitlesContainer>
            </MainContainer>
            <ImageBackground onClick={habitoCheckToggle} done={done}>
                <img src="./assets/img/Checkmark.svg" alt="Check" />
            </ImageBackground>
        </CardContainer>
    )
}