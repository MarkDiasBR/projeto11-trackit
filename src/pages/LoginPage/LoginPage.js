import { LoginElementsContainer, Logo, LoginForm, InputField, ButtonEntrar } from "./styled"

export default function LoginPage() {
    return(
        <LoginElementsContainer>
            <Logo src="./assets/img/Logo.png" alt="TrackIt Logo"/>
            <LoginForm>
                <InputField type="email" placeholder="e-mail" />
                <InputField type="password" placeholder="senha"/>
                <ButtonEntrar type="submit">Entrar</ButtonEntrar>                               
            </LoginForm>
            <p>Não tem uma conta? Cadastre-se!</p>
        </LoginElementsContainer>
    )
}