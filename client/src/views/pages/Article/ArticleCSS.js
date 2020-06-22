import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%; height: 100%;
    
  background: darkblue; 

  .head-image{
    width: 100%;
    height: 300px;
    img{
      width: 100%; height: 100%; object-fit: cover;
    }
  }

  .container-grid{
    width: 1440px;
    margin: 25px auto;
    display: flex; 
    flex-direction: column;
    // grid-template-rows: auto auto;
    // grid-template-rows: 50px auto;
    // grid-gap: 10px;

    &__top{
      margin-bottom: 25px;
      
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-template-rows: 50px;
      grid-gap: 20px;

      .breadcrumb{
        background: #fff;
        width: 100%;
        display: grid; align-content: center;
      }

      .social-block{
        background: #fff;
        display: grid; 
        grid-template-columns: repeat(4, 1fr);
        &>div{
          display: grid;
          justify-content: center;
          
          a{
            height: 50px;
            svg{
              height: 100%; width: auto;
            }

            &:hover svg circle{
              stroke: #fff;
            }

          }
        }
      }
    }

    .date-section{
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 20px;
      margin-bottom: 25px;
  
      .left-grid{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        a{
          color: #fff;
        }
      }
      span{
        color: #fff;
        // background: #000;
      }
    }


    &__bot{
      display: grid;
      grid-template-columns: 3fr 1fr;
      // grid-template-rows: auto;
      grid-gap: 20px;


      .content{
        background: #fff;
      }

      .add-block{
        background: #fff;
      }
    }
  }


  h1{
    text-align: center;
  }
`;