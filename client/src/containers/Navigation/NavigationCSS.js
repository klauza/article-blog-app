import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50px; height: 100%;
  background: #fff;

  position: fixed;
  left: 0;
  top: 0; bottom: 0;

  @media(max-width: 768px){
    width: 100%; height: 50px;

    top: unset;
    left: 0; right: 0;
    bottom: 0;
  }
`;