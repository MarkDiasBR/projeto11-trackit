import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        -webkit-tap-highlight-color: transparent;
        &:focus {
            outline: 2px solid #1098FC;    
        }
    }
    
    a:link, a:visited, a:hover, a:active { 
        color: #52B6FF;
        text-decoration: none; 
    }
`

export default GlobalStyle