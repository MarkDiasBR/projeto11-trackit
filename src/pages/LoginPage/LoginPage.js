import { LoginElementsContainer, Logo, LoginForm, InputField, ButtonForm } from "./styled"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return(
        <LoginElementsContainer>
            <Logo src="./assets/img/Logo.png" alt="TrackIt Logo"/>
            <LoginForm>
                <InputField type="email" placeholder="e-mail" />
                <InputField type="password" placeholder="senha"/>
                <ButtonForm type="submit">Entrar</ButtonForm>                               
            </LoginForm>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginElementsContainer>
    )
}