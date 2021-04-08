import { createGlobalStyle } from 'styled-components';
import { color } from './variables.styles.js';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
  }

  body {
    overflow-x: hidden;
    overscroll-behavior: none;
    user-select: none;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    // font-family: 'Gochi Hand', cursive;
    // font-family: 'Permanent Marker', cursive;
    // background-color: ${color.primaryColorLight};
    // color: ${color.primaryColorDark};
    // font-size: 5rem;
  }
`;
