import styled from "styled-components";

export const LoginElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        margin-top: 25px;
        border-radius: 2px;
        outline-offset: 2px;
    }

    a:visited, a:active, a:link {
        outline: none;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        text-decoration: underline;
    }
`
export const Logo = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    align-items: center;
    margin-top: 32px;
`
export const InputField = styled.input`
    margin-left: 36px;
    margin-right: 36px;
    width: calc(100vw - 72px);
    max-width: 450px;
    height: 45px;
    padding: 11px;
    font-size: 20px;
    color: #126BA5;
    caret-color: #126BA5;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    &::placeholder {
        color: #DBDBDB;
    }
    &:focus {
        outline: 2px solid #1098FC;
    }
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover{
        box-shadow: 0 0 0px 1000px #FFF inset;
        -webkit-box-shadow: 0 0 0px 1000px #FFF inset;
        -webkit-text-fill-color: #126BA5;
    }
`
export const ButtonForm = styled.button`
    width: calc(100vw - 72px);
    max-width: 450px;
    height: 45px;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    outline: none;
` 