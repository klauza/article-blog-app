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

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  // background: #d4d4d4;
  background:linear-gradient(45deg, rgba(188, 164, 6, 0.5) 0%, rgba(188, 164, 6, 0.5) 12.5%,rgba(165, 158, 18, 0.5) 12.5%, rgba(165, 158, 18, 0.5) 25%,rgba(142, 152, 31, 0.5) 25%, rgba(142, 152, 31, 0.5) 37.5%,rgba(119, 146, 43, 0.5) 37.5%, rgba(119, 146, 43, 0.5) 50%,rgba(96, 140, 56, 0.5) 50%, rgba(96, 140, 56, 0.5) 62.5%,rgba(73, 134, 68, 0.5) 62.5%, rgba(73, 134, 68, 0.5) 75%,rgba(50, 128, 81, 0.5) 75%, rgba(50, 128, 81, 0.5) 87.5%,rgba(27, 122, 93, 0.5) 87.5%, rgba(27, 122, 93, 0.5) 100%),linear-gradient(135deg, rgb(197, 183, 45) 0%, rgb(197, 183, 45) 12.5%,rgb(177, 167, 44) 12.5%, rgb(177, 167, 44) 25%,rgb(158, 152, 44) 25%, rgb(158, 152, 44) 37.5%,rgb(138, 136, 43) 37.5%, rgb(138, 136, 43) 50%,rgb(118, 121, 42) 50%, rgb(118, 121, 42) 62.5%,rgb(98, 105, 41) 62.5%, rgb(98, 105, 41) 75%,rgb(79, 90, 41) 75%, rgb(79, 90, 41) 87.5%,rgb(59, 74, 40) 87.5%, rgb(59, 74, 40) 100%);
  border: 5px dashed green;
`;

export const FeaturedArticlesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 5px dashed orange;

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