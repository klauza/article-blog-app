import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  
  background: ${props => props.theme.colors.primary};

  button{
    background: ${props => props.theme.colors.primary};
  }
  
`;