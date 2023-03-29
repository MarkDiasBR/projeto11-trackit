import styled from "styled-components";

export const NavBarContainer = styled.div`
    z-index: 1;
    padding: 0 18px;
    background: rgb(20,112,172);
    background: linear-gradient(180deg, rgba(20,112,172,1) 0%, rgba(17,101,156,1) 100%);
    &::before {
        content: "";
        background-image: url("./assets/img/Noise.png");
        background-size: contain;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.13;
    }
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
        text-shadow: 0px 2px 2px rgba(0,0,0,0.3)
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
        box-shadow: 1px 2px 4px rgba(0,0,0,0.7);
    }
`