import { LoginElementsContainer, Logo, LoginForm, InputField, ButtonForm, AlertDiv, AnimatedContainer } from "./styled"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import BASE_URL from "../../constants/url"
import axios from "axios"
import { UserContext } from "../../App"
import AlertContainer from "./AlertContainer"

export default function LoginPage() {
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({})
    const [classGone, setClassGone] = useState("")
    const [disabledInput, setDisabledInput] = useState(false)
    const { state } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/hoje")
        }
        if (state) {
            setTimeout(() => {
                setClassGone("gone")
            }, 3000);
        }
    }, [])
    

    function handleForm(event) {
        const {name, value} = event.target

        setForm({...form, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()

        setDisabledInput(true)

        axios.post(`${BASE_URL}/auth/login`, form)
            .then(response => {
                const { id, name, image, token } = response.data
                console.log({ id, name, image, token })
                setUser({ id, name, image, token })
                localStorage.setItem("user", JSON.stringify({ id, name, image, token }))
                navigate("/hoje")
            })
            .catch(error => {
                alert(error.response.data.message)
                setDisabledInput(false)
            })
    }

    function ErrorAlert(props) {
        return (
            <>
                <p>{props.errorTitle}</p>
                <p>{props.errorMessage}</p>
            </> 
        )
    }
    
    return(
        <>
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
                <ButtonForm type="submit" disabledInput={disabledInput}>
                    {disabledInput
                    ? <img src="./assets/img/SpinnerDots.svg " alt="Loading"/>
                    : "Entrar"}
                </ButtonForm>                               
            </LoginForm>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </LoginElementsContainer>
        <AnimatedContainer className={`${classGone}`}>
            <AlertContainer>
                {state && (
                    <AlertDiv errorColor={state.errorColor}>
                        <ErrorAlert errorMessage={state.errorMessage} errorTitle={state.errorTitle}/>
                    </AlertDiv>
                )}
            </AlertContainer>            
        </AnimatedContainer>

        </>
    )
}