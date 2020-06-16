import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 25px;
  padding: 25px 15px;
  background: lightgrey;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.9);
  width: 100%;
  position: relative;
  .header{
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 1px solid #000;
  }

  .contact{

    &>form>div{
      display: flex; flex-direction: column;
      margin-top: 7.5px;

      input, textarea, button{
        padding: 5px;
        font-family: 'Lato', sans-serif;
      }

      button{
        cursor: pointer;
        background: #3d94e0;
        outline: none;
        border: none;
        color: #fff;
        &:hover{
          background: #337cbd;
          box-shadow: 0 0 3px 0 rgba(0,0,0,.25);
        }
      }
    }
  }

`;