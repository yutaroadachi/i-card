import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    background-color: ${theme.main.base};
    color: ${theme.main.accent};
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  .material-icons {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
