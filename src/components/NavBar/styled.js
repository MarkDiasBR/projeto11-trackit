import styled from "styled-components";

export const NavBarContainer = styled.div`
    z-index: 1;
    padding: 0 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    p {
        color: #FFFFFF;
        font-size: 38px;
        font-family: 'Playball', cursive;
    }

    a {
        outline-offset: 8px;
        border-radius: 1px;
    }

    a:visited, a:active, a:link {
        outline: none;
    }
    
    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`