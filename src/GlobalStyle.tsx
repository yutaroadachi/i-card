import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.main.base};
    color: ${theme.main.accent};
    font-family: 'Montserrat', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
