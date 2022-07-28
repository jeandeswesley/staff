import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --brackgroud: #f8f2f5;
    --white: #FFF;
    --black: #000;

    --blue-ligth: #6933FF;

    --text-title: #363F5F;
    --text-body: #f8f2f9;

    --shape: #FFFFFF;
}

* {
    margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
}
    @media (max-width: 720px) {
        font-size: 87.5%; //14px
}

body {
    background: var(--brackgroud);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}
[disabled]  {
    opacity: 0.6;
    cursor: not-allowed;
`