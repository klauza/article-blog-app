import React from 'react';
import { Wrapper } from './CategoryCSS';

const Category = (props) => {
  const cat = props.match.params.category;

  return (
    <Wrapper className="page">
      <h1>Showing {cat.toUpperCase()} dynamic route</h1>
    </Wrapper>
  )
}

export default Category
