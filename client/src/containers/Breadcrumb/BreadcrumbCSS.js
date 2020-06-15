import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%; margin: 0 auto;
  display: flex; flex-direction: row;
  background: grey;
  padding: 5px 10px;
  border-radius: 3px;

  div{
    display: flex; flex-direction: row;
    height: 25px;
    align-items: center;

    svg{
      width: 25px; height: 25px;
    }

    a{
      color: #fff;
    }

    span{
      margin: 0 5px;
    }
  }


`;