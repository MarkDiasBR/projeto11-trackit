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
        border-radius: 2px;
    }

    a {border-radius: 2px}

    a:nth-child(2) {
        margin-bottom: 45px;
    }

    a:visited {
        text-decoration: none;
    }
`

export const CircleContainer = styled.div`
    width: 115px;

    padding-left: 8px;
    padding-right: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
    left: 5px
`