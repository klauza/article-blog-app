import React from 'react';

// breadcrumb
import Breadcrumb from '../../../containers/Breadcrumb';

// css, media
import { Wrapper } from './ArticleCSS';
import { CircleIcon } from '../../../media/Icons';

// data
import cookingArticles from '../../../data/getCookingArticles';

const artcl = cookingArticles[0];

const Article = () => {

  return (
    <Wrapper className="page">
      <div className="head-image"><img src={`https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} /></div>

      <div className="container-grid">

        <div className="container-grid__top">
          <div className="breadcrumb">
            <Breadcrumb path={window.location.pathname} />
          </div>
          <div className="social-block">
            <div><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><CircleIcon /></a></div>
            <div><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><CircleIcon /></a></div>
            <div><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><CircleIcon /></a></div>
            <div><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><CircleIcon /></a></div>
          </div>
        </div>

        <div className="date-section">
          <span>[ {artcl.added} ]</span>
          <div/>
        </div>

        <div className="container-grid__bot">

          <div className="content">
            <h1>Article Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, officiis!</p>
          </div>
          <div className="add-block">ADS</div>
        </div>
      </div>

      <div className="comments-section">

      </div>

      
    </Wrapper>
  )
}

export default Article