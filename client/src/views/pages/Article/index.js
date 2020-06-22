import React from 'react';
import FetchUrl from '../../../utils/FetchUrl';
import { Link } from 'react-router-dom';

// SEO
import { Helmet } from 'react-helmet';

// breadcrumb
import Breadcrumb from '../../../containers/Breadcrumb';

// css, media
import { Wrapper } from './ArticleCSS';
import { CircleIcon } from '../../../media/Icons';

// data
import cookingArticles from '../../../data/getCookingArticles';

const artcl = cookingArticles[0];

const Article = (props) => {

  const art = props.match.params.article;

  const { data, loading, error } = FetchUrl(`http://localhost:1337/articles?slug=${art}`) || null;

  if(data) console.log(data[0])

  return (
    <>
      <Helmet>
        <title>Article</title>
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
            <div className="left-grid"><span>in {data !== null && <Link to={`/articles/${data[0].primary_category}`}>{data[0].primary_category}</Link>}</span><span>[ {artcl.added} ]</span></div>
            <div/>
          </div>

          <div className="container-grid__bot">

            <div className="content">
              {data !== null 
              ? 
                <div >
                    <h3>{data[0].title}</h3>
                    <section
                      dangerouslySetInnerHTML={{__html: data[0].content}}>
                      
                    </section>
                </div>
              

              : <div>Fetching data...</div>
              }

            </div>
            <div className="add-block">ADS</div>
          </div>
        </div>

        <div className="comments-section">

        </div>

        
      </Wrapper>
    </>
  )
}

export default Article