import { createGlobalStyle, css } from "styled-components";

import colors from "assets/colors";

export const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap");

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 10px;
  }

  body {
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  /*  */

  button {
    cursor: pointer;
  }

  /*  */

  .toast {
    font-size: 1.6rem;
  }

  .menu__link {
    display: flex;
    padding: 1em 0 1em 2em;
    align-items: center;
    color: #8a2be2;
    font-size: 2em;
  }

  .menu__link:hover {
    backdrop-filter: brightness(.9);
  }

  .menu__link:hover span {
    color: ${colors.black};
  }

  .form__link {
    margin-top: 1em;
    color: ${colors.aliceblue};
    font-size: 1.2em;
    text-align: center;
    text-decoration: underline;
}
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
