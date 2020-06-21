import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background: #fff;
  color: #000;
  display: grid;
  align-content: center;
  border: 1px dashed black;
  

  h2{
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
    span{
      position: relative;

      &::before{
        display: none;
      }
      &::after{
        display: none;
      }
    }
  }

  @media ${props => props.theme.device.mobileM}{

    h2{
      font-size: 2.5em;

      span{
        &::before{
          content: '';
          display: block;
          position: absolute;
          left: -15%; top: 50%; 
          // transform: translateY(-50%);
          background: #000;
          width: 20px; height: 2px;
        }
        &::after{
          content: '';
          display: block;
          position: absolute;
          right: -15%; top: 50%; 
          // transform: translateY(-50%);
          background: #000;
          width: 20px; height: 2px;
        }
      }
    }
  }
`;

const BigHeader = ({text}) => {
  return (
    <Wrapper>
      <h2><span>{text}</span></h2>
    </Wrapper>
  )
}

export default BigHeader
