import { CardContainer, DaysDiv, ButtonsDiv } from "./styled"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"
import { HabitosContext } from "../../pages/HabitosPage/HabitosPage"
import BASE_URL from "../../constants/url"
import axios from "axios"


export default function NovoHabitoCard({ botaoNovoHabito, setBotaoNovoHabito }) {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)    
    const localStorageUser = JSON.parse(localStorage.getItem("user"))
    const [carregando, setCarregando] = useState(false);
    const [body, setBody] = useState({"name": "", "days": []})
    const { setHabitos } = useContext(HabitosContext);

    if (localStorageUser === null) {
        localStorage.setItem("user", JSON.stringify(user))
    }

    const bounceOut = ( !user || !localStorageUser );
    const config = { "headers" : { "Authorization": `Bearer ${user ? user.token : ""}` } };

    function handleBody(event) {
        if (event.target.type === "text") {
            const { name, value } = event.target
            setBody({...body, [name]: value})
        } else if (event.target.type === "submit") {
            if (body.days.includes(Number(event.target.value))) {
                console.log("A")
                const daysArray = body.days.filter((elem)=>elem!==Number(event.target.value))
                const newBody = {...body, ['days']: daysArray}
                setBody(newBody)
                console.log(newBody)
            } else {
                console.log("B")
                const daysArray = [...body.days];
                daysArray.push(Number(event.target.value))
                const newBody = {...body, ['days']: daysArray}
                setBody(newBody)
                console.log(newBody)
            }
        }

    }

    function handleSubmit(event) {
        console.log("objeto body abaixo")
        console.log(body)
        setCarregando(true)
        axios.post(`${BASE_URL}/habits`, body, config)
            .then(response => {
                console.log(response.data)
                axios.get(`${BASE_URL}/habits`, config)
                    .then(response=>{
                        console.log("A")
                        console.log(response.data)
                        setHabitos(response.data)
                        const initialBody = {...body, ["name"]: ""}
                        setBody(initialBody)
                        setCarregando(false)
                    })
                    .catch(err=>console.log(err.response.data))
                    setCarregando(false)
            })
            .catch(error => {
                console.log(error.response.data.message)
                setCarregando(false)
        })
    }

    useEffect(() => {
        if (bounceOut) {
            navigate("/", {state: {
                errorTitle: "⚠️ ACESSO NÃO PERMITIDO",
                errorMessage: "Faça o login!",
                errorColor: "#F7330E"}})
            return;
        }   
    })

    return (
        <>
        {botaoNovoHabito ?
        <CardContainer>
            <input
                name="name"
                type="text" 
                placeholder="Ler 1 capítulo de livro"
                value={body.name}
                onChange={handleBody}
                autoComplete="off"
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
                <button onClick={()=>{
                    const initialBody = {"name": "", "days": []}
                    setBody(initialBody)
                    setBotaoNovoHabito(false)
                }}>Cancelar</button>
                <button onClick={handleSubmit} type="submit" disabled={body.days.length === 0 || body.name === ""}>
                    {carregando
                    ? <img src="./assets/img/SpinnerDots.svg " alt="Loading"/>
                    : "Salvar"}
                </button>
            </ButtonsDiv>
        </CardContainer>
        : ""}
        </>
    )
}