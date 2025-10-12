import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; 
    padding: 0;
    font-family: cursive;
}
    
    h1, h2, h3, h4, h5, h6, p { 
    margin: 5px;
    padding: 0;
    }

    * {
    box-sizing: border-box;
    }

    h3{
    margin-bottom: 10px;
    }

    div{
    display: flex;
    align-items: center;
    }
`