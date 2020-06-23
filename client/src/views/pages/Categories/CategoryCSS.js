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

  .filter-category{
    width: 70%;
    margin: 0 auto;

    .filter-element{
      margin: 0 2.5px;
      padding: 2.5px 5px;
      border: 1px solid black;
      background: #000;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover{
        transition: all 0.3s ease;
        background: #fff;
        color: #000;
      }
    }

    .selected{
      background: #fff;
      color: #000;
    }
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
  box-shadow: 0 2px 5px -1px rgba(0,0,0,1);

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

export const FilterQuery = styled.div`
&.filter-query{
  margin: 0 auto;
  width: 500px; height: auto;
  border: 1px solid black;


}
.filter-query-indicator{
  width: ${props => props.w+'px'};
  height: 8px;
  background: red;
  border-radius: 1.5em;
}
`;