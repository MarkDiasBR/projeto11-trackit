import styled from "styled-components";

export const CardContainer = styled.div`
    margin-top: 20px;
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    p {
        margin-left: 19px;
        margin-top: 18px;
        margin-bottom: 0px;
        width: calc(100% - 38px);
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    & > button:nth-of-type(1) {
        position: absolute;
        right: 18px;
        color: yellow;
        background-color: transparent;
    }


`

export const DaysDiv = styled.div`
    width: fit-content;
    margin-left: 19px;
    margin-top: 8px;
    margin-bottom: 15px;
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
    }
`