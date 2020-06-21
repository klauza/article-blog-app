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
    font-family: 'Titillium Web', sans-serif;
    transition: color .5s ease;
  }
  html{
    // height: 100%;
  }
  body, #root{
    width: 100%; height: 100%;
    // overflow-x: hidden;
  }
  body{
    // height: 100vh;
    overflow-y: scroll;
  }
  

  
  .views-container{
    position: relative;
    left: 0px;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    @media ${props => props.theme.device.tablet} {
      padding: 0px;
    }
    @media ${props => props.theme.device.laptop} {
      left: 50px;
      transform: translate(-25px);
      width: calc(100% - 50px);
    }

  }

  .page{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
  }
  
  // enter 300ms, exit 150ms
  .fade-appear, .fade-enter{
    opacity: 1; 
    z-index: 1;
  }
  .fade-appear-active, .fade-enter.fade-enter-active{
    opacity: 1;
    transition: opacity 300ms linear 150ms;
  }
  .fade-exit{
    opacity: 1;
  }
  .fade-exit.fade-exit-active{
    opacity: 0;
    transition: opacity 150ms linear;
  }
`;