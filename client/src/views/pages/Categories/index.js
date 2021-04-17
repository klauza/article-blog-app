import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../history';

// content
import Content from './Content';

// SEO
import { Helmet } from 'react-helmet';

// breadcrumb
import Breadcrumb from '../../../containers/Breadcrumb';

// css, media
import { Card, Wrapper } from './CategoryCSS';
import { cookingCategory } from '../../../media/Images';

// query search functions
import getQuery from './getQuery';
import FilterQry from './FilterQry';



const Category = (props) => {
  const cat = props.match.params.category;
  // const [fData, setFData] = useState(null);
  const [query, setQuery] = useState(getQuery(history.location));
  


  // console.log( {data, loading, error} )




  // FILTERING
  // query

  // useEffect(()=>{
  //   getQuery(history.location);
  // }, [])



  function setParams(val) {
    const searchParams = new URLSearchParams();
    searchParams.set("search", val);
    return searchParams.toString().toLowerCase();
  }

  const updateURL = (val) => {
    // const url = setParams();
    if(val === ''){
      props.history.push(history.location.pathname);
    } else{
      props.history.push(`?search=${val}`);
    }
  };

  // category
  const [filter, setFilter] = useState([]);

  const handleFilter = (e) => {
    if(cat === e.target.id) return
    // console.log(e.target.id)
    history.push(`/articles/${e.target.id}`)
  }
  const deleteFilter = () => {
   
  }
  // 






  console.log('query: ',query);
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

        {/* category filter  */}
        <div className="filter-category">
          <h4>Filter</h4>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <div id="all" className={`filter-element ${cat === "all" && 'selected'}`} onClick={handleFilter}>All</div>
            <div id="programming" className={`filter-element ${cat === "programming" && 'selected'}`} onClick={handleFilter}>Programming</div>
            <div id="hobby" className={`filter-element ${cat === "hobby" && 'selected'}`} onClick={handleFilter}>Hobby</div>
            <div id="photography" className={`filter-element ${cat === "photography" && 'selected'}`} onClick={handleFilter}>Photography</div>
          </div>
        </div>

        {/* query search filter */}
        <FilterQry setParams={setParams} setQuery={setQuery} updateURL={updateURL} query={query} />

        {/* article cards */}
        <Content cat={cat} />

      
      </Wrapper>
      
      
    </>
  )
}

export default React.memo(Category)