import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%; height: 100%;
  
  background: ${props => props.theme.colors.primary};
  // background: transparent;
  transition: background .5s ease;
  button{
    background: ${props => props.theme.colors.primary};
  }
  
`;

export const FeaturedArticlesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    text-align: center;
  }

  .container{
    display: grid;
    grid-template-columns: 1fr;

    .card{
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.65);
      &-title{
        background: #000;
        h3{
          color: #fff;
        }
      }

      .imgBox{
        width: 100%; height: 100%;
        
        img{
          width: 100%; height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  
  @media ${props => props.theme.device.mobileS}{
    .container{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5px;
      margin: 0 5px;

    }
  }
  @media ${props => props.theme.device.tablet}{
    .container{
      justify-content:center;
      grid-template-columns: repeat(3, minmax(0, 300px));
      grid-gap: 15px;
    }
  }
`; 