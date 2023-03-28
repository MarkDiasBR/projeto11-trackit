import styled from "styled-components";

export const HojePageContainer = styled.div`
    width: 100%;
    background-color: #E5E5E5;
`
export const MainContainer = styled.div`
    min-height: 100vh;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding: 70px 17px;
    
    p {
        margin-top: 35px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;
        &:nth-child(2) {
            margin-top: 6px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 18px !important;
            color: #BABABA !important; 
        }
    }
`

export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 50px;
`