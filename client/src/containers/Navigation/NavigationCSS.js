import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0; right: 0;
  bottom: 0;
  z-index: 2020;

  width: 100%; height: 50px;
  background: #d4d4d4;
  display: flex; flex-direction: column;

  // .progress-container{
  //   height: 5px; width: 100%;
  //   background: red;
  //   order: 1;

  //   .progress-bar {
  //     height: 100%;
  //     background: #4caf50;
  //     width: 0%;
  //   }

  // }


  .nav-container{
    order: 2;
    display: flex; flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nav{
    &--element{
      border: 1px solid #000;
      display: flex; flex-direction: column;
      border: 1px solid yellow;
    }
  }


  .navlink-2{
    position: relative;

    .articles-group{
      width: 200px;
      background: red;
      display: flex; flex-direction: row;
      justify-content: space-between;
      text-align: center;

      position: absolute;
      top: 0;
      left: 50%;
      transform: translateY(-100%) translateX(-50%);
      opacity: 0;
      display: none;
      &.toggle{
        display: block;
        opacity: 1;
      }
      svg{
        margin: 0 auto;
      }
      a{ 
        padding: 5px;
        width: 100%;
      }

    }


  }

  @media ${props => props.theme.device.laptop}{
    width: 50px; height: 100%;
    left: 0;
    top: 0; bottom: 0;
    flex-direction: row;

    // .progress-container{
    //   height: 100%; width: 5px;
    //   background: red;
    //   order: 2;

    //   .progress-bar {
    //     height: 0%;
    //     background: #4caf50;
    //     width: 100%;
    //   }
    // }

    .nav-container{
      order: 1;
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }

    .navlink-2{
      position: relative;
  
      .articles-group{
        top: 0;
        left: 100%;
        transform: translateY(0) translateX(0);
      }
    }
  
  }
`;

export const ProgressIndicator = styled.div`
  &.progress-container{
    height: ${props => props.isMobile ? "5px" : "100%"}; 
    width: ${props => props.isMobile ? "100%" : "5px"};
    background: red;
    order: ${props => props.isMobile ? "1" : "2"};

    .progress-bar {
      background: #4caf50;
      height: ${props => props.height};
      width: ${props => props.width};
    }

  }
`;