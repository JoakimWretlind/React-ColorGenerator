import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ailerons';
    src: url('./Fonts/Ailerons.ttf');
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    background: #333;
    box-sizing: border-box;
    font-family: 'montserrat', sans-serif;
  }
  h3 {
    text-transform: capitalize;
    font-size: clamp(2.6rem, 4vw, 3.6rem);
    color: #f1f1f1;
    font-family: 'Ailerons';
    padding-bottom: .8rem;
  }
  p{
    margin-bottom: .8rem;
    font-size: 1.2rem;
    letter-spacing: .1rem;  
    &.alert {
      text-transform: uppercase;
      font-size: 1rem;
      margin-top: 0.8rem;
    }
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;