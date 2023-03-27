import { CardContainer, DaysDiv, ButtonsDiv } from "./styled"
import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../App"
import BASE_URL from "../../constants/url"
import axios from "axios"

export default function NovoHabitoCard() {
    const [body, setBody] = useState({"name": "", "days": []})
    const { user } = useContext(UserContext)
    const config = { "headers" : { "Authorization": `Bearer ${user.token}` } };

    function handleBody(event) {
        if (event.target.type === "text") {
            const { name, value } = event.target
            setBody({...body, [name]: value})
        } else if (event.target.type === "submit") {
            if (body.days.includes(event.target.value)) {
                const daysArray = body.days.filter((elem)=>elem!==event.target.value)
                setBody({...body, ['days']: daysArray})
            } else {
                const daysArray = [...body.days];
                daysArray.push(Number(event.target.value))
                setBody({...body, ['days']: daysArray})
            }
        }
    }

    function handleSubmit(event) {
        console.log("objeto body abaixo")
        console.log(body)
        axios.post(`${BASE_URL}/habits`, body, config)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data.message)
        })
    }

    console.log("body:")
    console.log(body)

    return (
        <CardContainer>
            <input 
                name="name"
                type="text" 
                placeholder="Ler 1 capítulo de livro"
                value={body.name}
                onChange={handleBody}
            />
            <DaysDiv>
                <button
                    className={`${body.days.includes(0)? "selecionado" : ""}`}
                    value={0} 
                    onClick={handleBody}>D</button>
                <button
                    className={`${body.days.includes(1) ? "selecionado" : ""}`}
                    value={1} 
                    onClick={handleBody}>S</button>
                <button
                    className={`${body.days.includes(2)? "selecionado" : ""}`}
                    value={2} 
                    onClick={handleBody}>T</button>
                <button
                    className={`${body.days.includes(3)? "selecionado" : ""}`}
                    value={3} 
                    onClick={handleBody}>Q</button>
                <button
                    className={`${body.days.includes(4)? "selecionado" : ""}`}
                    value={4} 
                    onClick={handleBody}>Q</button>
                <button
                    className={`${body.days.includes(5)? "selecionado" : ""}`}
                    value={5} 
                    onClick={handleBody}>S</button>
                <button
                    className={`${body.days.includes(6)? "selecionado" : ""}`}
                    value={6} 
                    onClick={handleBody}>S</button>
            </DaysDiv>
            <ButtonsDiv>
                <button>Cancelar</button>
                <button onClick={handleSubmit} type="submit">Salvar</button>
            </ButtonsDiv>
        </CardContainer>
    )
}