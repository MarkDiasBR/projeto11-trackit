import styled from "styled-components"

export const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    background-color: #FFFFFF;
    color: #52B6FF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p { 
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }
`

export const CircleContainer = styled.div`
    width: 110px;
    margin-bottom: 10px;
    position: relative;
    bottom: 16px;
    left: 5px
`