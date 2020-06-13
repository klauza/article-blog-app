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
  body, html, #root{
    width: 100%; height: 100%;
    overflow-x: hidden;
  }
  

  
  .views-container{
    margin: 0 auto;
    width: 100%;
    position: relative;
    left: 0px;
    @media ${props => props.theme.device.tablet} {
      padding: 0px;
    }
    @media ${props => props.theme.device.laptop} {
      left: 100px;
      transform: translate(-50px);
    }

  }

`;