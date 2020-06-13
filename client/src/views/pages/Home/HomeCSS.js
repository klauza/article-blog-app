import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%; height: 100%;
  
  background: ${props => props.theme.colors.primary};
  // background: transparent;

  button{
    background: ${props => props.theme.colors.primary};
  }
  
`;