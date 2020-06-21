import React from 'react';
import FetchUrl from '../../../utils/FetchUrl';
import { NavLink } from 'react-router-dom';

// SEO
import { Helmet } from 'react-helmet';

// breadcrumb
import Breadcrumb from '../../../containers/Breadcrumb';

// css, media
import { Card, Wrapper } from './CategoryCSS';
import {cookingCategory} from '../../../media/Images';


const Category = (props) => {
  const cat = props.match.params.category;

  const { data, loading, error } = FetchUrl(`http://localhost:1337/categories?name=${cat}`) || null;

  if(data) console.log(data[0].articles)
  

  return (
    <>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content="Welcome to blog's articles page" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - articles" />
        <meta property="og:description" content="Blog about something awesome" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:site_name" content="Your App" />
        <meta property="og:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta name="twitter:description" content="Blog about something awesome" />
        <meta name="twitter:title" content="Blog - the best blog" />
        <meta name="twitter:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
      </Helmet>

      <Wrapper className="page">
        <div className="top-image">
          <img src={cookingCategory} alt="" />
        </div>
        <h1>Showing {cat.toUpperCase()} dynamic route</h1>
        <Breadcrumb path={window.location.pathname} />

        <div className="category-content">

        {data !== null 
          ? data[0].articles.map((article, i) => 
            <Card key={i} bg={`url(http://localhost:1337${article.title_image.formats.thumbnail.url})`}>
              <NavLink to={`/articles/${cat}/${article.slug}`} >
                <h3>{article.title}</h3>

              </NavLink>
            </Card>
            )

          : <div>Fetching data...</div>}
      </div>
      
      </Wrapper>
    </>
  )
}

export default Category