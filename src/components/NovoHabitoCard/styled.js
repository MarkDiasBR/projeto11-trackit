import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    input {
        margin-left: 19px;
        margin-top: 18px;
        width: calc(100% - 38px);
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        height: 45px;
        font-size: 20px;
        padding: 11px;
        outline: none;

        &::placeholder {
            color: #DBDBDB;
        }
    }
`

export const DaysDiv = styled.div`
    width: fit-content;
    margin-left: 19px;
    margin-top: 8px;
    display: flex;
    gap: 4px;

    button {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        color: #DBDBDB;
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        &.selecionado {
            background-color: #CFCFCF;
            color: #FFFFFF;
        }
    }
`

export const ButtonsDiv = styled.div`
    align-self: flex-end;
    color: white;
    margin-top: 29px;
    margin-right: 19px;
    margin-bottom: 15px;

    display: flex;
    gap: 15px;

    button {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: #FFFFFF;
        width: 84px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 12px;
        }
        &:first-child {
            background-color: #FFFFFF;
            color: #52B6FF;
        }
        &:disabled {
            opacity: 0.4;
        }
    }
`