import { LoginElementsContainer, Logo, LoginForm, InputField, ButtonForm } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import BASE_URL from "../../constants/url"
import axios from "axios"

export default function LoginPage() {
    const [form, setForm] = useState({})
    const [disabledInput, setDisabledInput] = useState(false)

    const navigate = useNavigate()

    function handleForm(event) {
        const {name, value} = event.target

        setForm({...form, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()

        setDisabledInput(true)

        axios.post(`${BASE_URL}/auth/login`, form)
            .then(response => {
                console.log(response.data)

                navigate("/habitos")
            })
            .catch(error => {
                alert(error.response.data.message)
                setDisabledInput(false)
            })
    }

    return(
        <LoginElementsContainer>
            <Logo src="./assets/img/Logo.svg" alt="TrackIt Logo"/>
            <LoginForm onSubmit={handleSubmit}>
                <InputField name="email" type="email" placeholder="e-mail" onChange={handleForm} disabled={disabledInput}/>
                <InputField name="password" type="password" placeholder="senha" onChange={handleForm} disabled={disabledInput}/>
                <ButtonForm type="submit" disabledInput={disabledInput}>Entrar</ButtonForm>                               
            </LoginForm>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginElementsContainer>
    )
}