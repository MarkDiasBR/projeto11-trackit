import styled from "styled-components";
import Calendar from "react-calendar"

export const HistoricoPageContainer = styled.div`
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
    }
`

export const ContainerCalendar = styled.div`
    height: 400px;
    margin-bottom: 30px;
`

export const StyledCalendar = styled(Calendar)`
    width: 100%;
    height: 100%;
    margin-top: 12px;
    border: none;
    border-radius: 10px
`