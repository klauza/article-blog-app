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
    margin: 0 auto;

    @media ${props => props.theme.device.laptop} {
      max-width: 800px;
    }
  
    @media ${props => props.theme.device.laptopL} {
      max-width: 1400px;
    }
  }

`;