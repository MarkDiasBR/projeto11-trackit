import { LoginElementsContainer, Logo, LoginForm, InputField, ButtonForm } from "./styled"
import { Link } from "react-router-dom"

export default function CadastroPage() {
    return(
        <LoginElementsContainer>
            <Logo src="./assets/img/Logo.png" alt="TrackIt Logo"/>
            <LoginForm>
                <InputField type="email" placeholder="e-mail" />
                <InputField type="password" placeholder="senha"/>
                <InputField placeholder="nome"/>
                <InputField placeholder="foto"/>
                <ButtonForm type="submit">Entrar</ButtonForm>                               
            </LoginForm>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </LoginElementsContainer>
    )
}