import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0; right: 0;
  bottom: 0;
  z-index: 2020;

  width: 100%; height: 50px;
  background: #d4d4d4;



  .nav-container{
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

    .nav-container{
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