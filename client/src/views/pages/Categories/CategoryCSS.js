import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%; height: 100%;
  
  background: yellow; 

  
  .top-image{
    height: 300px; width: 100%;
    img{
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }

  h1{
    text-align: center;
  }


  .category-content{
    display: flex; flex-direction: row;
  }
`;

export const Card = styled.div`

  margin: 20px;
  width: 250px;
  height: 200px;
  background: ${props => props.bg};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  a{
    text-decoration: none;
  }

  h3{
    padding: 5px;
    text-align: center;
    color: #fff;
    background: rgba(0,0,0,.5);
  }
`;