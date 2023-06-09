import styled from "styled-components";

export const HabitosPageContainer = styled.div`
    width: 100%;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
`

export const MainContainer = styled.div`
    min-height: 100vh;
    height: max-content; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 17px;
    overflow-y: hidden;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #126BA5;
        padding-right: 15px;
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
            padding-right: 0;
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
    margin-top: 18px;
    margin-bottom: 28px;
`

// export const MasterDiv = styled.div`
//     height: 100%;
//     margin: 25px auto 0;
//     padding: 0;
//     background-color: yellow;
// `