import { LoginElementsContainer, Logo, LoginForm, InputField, ButtonForm } from "./styled"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import BASE_URL from "../../constants/url"

export default function CadastroPage() {
    const [form, setForm] = useState({email: "", name: "", image: "", password: "" })
    const [disabledInput, setDisabledInput] = useState(false)

    const navigate = useNavigate()

    function handleForm(event) {
        const {name, value} = event.target

        setForm({...form, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()

        setDisabledInput(true)

        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(response => {
                console.log(response.data)
                navigate("/") 
            })
            .catch(error=> {
                alert(error.response.data.message)
                setDisabledInput(false)
            })
    }

    console.log(form)

    return(
        <LoginElementsContainer>
            <Logo src="./assets/img/Logo.svg" alt="TrackIt Logo"/>
            <LoginForm onSubmit={handleSubmit}>
                <InputField 
                    name="email" 
                    type="email" 
                    placeholder="e-mail" 
                    onChange={handleForm}
                    disabled={disabledInput}
                    required
                />
                <InputField 
                    name="password" 
                    type="password" 
                    placeholder="senha" 
                    onChange={handleForm}
                    disabled={disabledInput}
                    required
                />
                <InputField 
                    name="name" 
                    placeholder="nome" 
                    onChange={handleForm}
                    disabled={disabledInput}
                    required
                />
                <InputField 
                    name="image" 
                    placeholder="foto" 
                    onChange={handleForm}
                    disabled={disabledInput}
                    required
                />
                <ButtonForm type="submit" disabledInput={disabledInput}>
                {disabledInput
                    ? <img src="./assets/img/SpinnerDots.svg" alt="Loading"/>
                    : "Cadastrar"}
                </ButtonForm>                               
            </LoginForm>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </LoginElementsContainer>
    )
}