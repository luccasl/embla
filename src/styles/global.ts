import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html,
    body,
    h1,
    p,
    span,
    button,
    input {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        height: 100%;
        width: 100%;
    }

    html {
        font-size: 100%;
    }
`