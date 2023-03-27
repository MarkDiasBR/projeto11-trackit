import { CardContainer, DaysDiv } from "./styled"
import BASE_URL from "../../constants/url"
import axios from "axios"
import { UserContext } from "../../App";
import { HabitosContext } from "../../pages/HabitosPage/HabitosPage";
import { useContext } from "react";


export default function HabitoCard({ id, name, days}) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { user } = useContext(UserContext);
    const { setHabitos } = useContext(HabitosContext);
    const config = {"headers": {"Authorization": `Bearer ${user.token}`}};

    function deleteHabito() {
        console.log('esse é meu id do hábito')
        console.log(id)
        axios.delete(`${BASE_URL}/habits/${id}`, config)
        .then(response=>{
            console.log("A")
            console.log(response.data)
            axios.get(`${BASE_URL}/habits`, config)
                .then(response=>{
                    console.log("A")
                    console.log(response.data)
                    setHabitos(response.data)
                })
                .catch(err=>console.log(err.res.data))
        })
        .catch(err=>console.log(err.res.data))
    }

    return (
        <CardContainer>
            <p>{ name }</p>
            <button onClick={()=>deleteHabito({id})}><img src="./assets/img/Lixeira.svg" alt="Excluir" /></button>
            <DaysDiv>
                {daysOfWeek.map((dia, indice) => (
                    <button key={`${id}${indice}${dia}`} className={`${days.includes(indice) && "selecionado"}`}>
                        {dia}
                    </button>

                ))}
            </DaysDiv>
        </CardContainer>
    )
}