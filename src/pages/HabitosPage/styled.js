import styled from "styled-components";

export const HabitosPageContainer = styled.div`
    width: 100%;
    background-color: #E5E5E5;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 70px 17px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-size: 27px;
        font-weight: 400;
        color: #FFFFFF;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        
        p {
            font-family: 'Lexend Deca';
            font-size: 27px;
            font-weight: 400;
            color: #FFFFFF;
            position: relative;
            bottom: 2px;
        }

        &:link, &:active, &:focus {
            outline: none;
        }
    }
`

export const ContainerTopo = styled.div`
    margin-top: 28px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
` 

export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 50px;
`

