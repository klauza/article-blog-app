import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background: #dcf5ff;
  margin: 0;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  font-family: Verdana;
  border: 5px dashed black;


  .container{
    width: 80%;
    background: #fff;
    border-radius: 10px;
    border: 1px solid black;
    min-height: 190px;

    position: relative;
    
    button{
      padding: 10px 10px;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 2px;
      box-shadow: 0 0 3px 0 #000;
      transition: box-shadow .5s ease;
      &:hover{
        transition: box-shadow .5s ease;
        box-shadow: 0 0 8px 0 #000;
      }
    }
    
    .outer{
      display: flex; flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
      width: 100%;
      padding: 10px;
        h1{
          margin-bottom: 5px;
          text-align: center;
        }
        p{
          font-size: .8rem;
        }
      }
    }

    .inner{
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 0; left: 0; bottom: 0; right: 0;
      padding: 1em;
      background: #00B6FF;
      border-radius: 10px;
      clip-path: circle(0% at 50% 120%);
      transition: all .5s ease-in-out;
      h1{
        color: #fff;
        text-align: center;
        margin-bottom: 5px;
      }

      input{
        display: block;
        margin: 0 auto;
      }
    }

    .inner-open{
      clip-path: circle(75%);
      background: #d4d4d4;
    }
  }

  @media ${props => props.theme.device.tablet}{
    .container{
      width: 50%;
      min-height: 150px;
      .outer, .inner{
        flex-direction: row;
        align-items: center;
        h1{
          text-align: left;
        }
        
      }

    }
  }
`;