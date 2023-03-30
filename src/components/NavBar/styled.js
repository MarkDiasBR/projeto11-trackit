import styled from "styled-components";

export const NavBarContainer = styled.div`
    z-index: 2;
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
        opacity: 0.1;
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
    
    &>img {
        z-index: 2;
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: ${props=>props.showLogout ? "none" : "1px 2px 2px rgba(0,0,0,0.3)"};

            position: absolute;
            right: 18px;
    }

    &>button {
        z-index: 10;
    }
`

export const LogoutDiv = styled.div`
    /* width: 51px;
    height: 130px;
    background-color: magenta;
    position: fixed;
    top: 9px;
    right: 18px;
    border-radius: 26px 26px 0 0; */

    z-index: 0;
    width: 59px;
    height: 130px;
    background-color: #FFFFFF;
    position: fixed;
    top: 5px;
    right: 14px;
    border-radius: 29px 29px 5px 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ContainerLogOff = styled.div`
    padding: 61px 4px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;

    p {
        font-family: "Lexend Deca", sans-serif;
        font-size: 13px;
        /* line-height: 16px; */
        color: rgb(102, 102, 102);
        text-shadow: none;
    }

    div {
        width: 51px;
        height: 51px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(247, 51, 14, 0.8);
        box-shadow: 0px 0px 3px rgba(247, 51, 14, 0.8);
        border-radius: 3px;
    }

    img {
        z-index: 2;
        width: 39px;
        height: 39px;
        border-radius: 0;
        /* object-fit: cover; */
        box-shadow: none;
        color: #FFFFFF;
        /* filter: drop-shadow(3px 3px 2px rgba(0,0,0, 0.8)); */
        filter: drop-shadow(3px 3px 10px rgba(255,255,255, 0.8));
    }
`