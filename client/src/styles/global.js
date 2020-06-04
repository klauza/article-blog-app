import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: Verdana sans-serif;
  }
  
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

  }
`;