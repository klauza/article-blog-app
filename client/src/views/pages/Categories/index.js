import React, { useEffect, useState } from 'react';
import FetchUrl from '../../../utils/FetchUrl';
import { NavLink } from 'react-router-dom';
import history from '../../history';

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

var timer = 0; // set initial value of url-update process
var interval = 0;
var width = 0;

const Category = (props) => {
  const cat = props.match.params.category;

  // FILTERING
  // query
  const [query, setQuery] = useState(getQuery(history.location));

  const [w, setW] = useState(0);
  // useEffect(()=>{
  //   getQuery(history.location);
  // }, [])

  const handleChange = (e) => {

    // cancel url-update if process already scheduled
    if (timer) {
      clearTimeout(timer);
      timer = 0;
      clearInterval(interval);
      interval = 0;
      width = 0;
    }

    var val = e.target.value.trim();
    setQuery(val);
    setParams(val);

    // it does not stop :((
    interval = setInterval(()=>{
      setW(width+=10);
      console.log(width)
    }, 100);
    
    timer = setTimeout(()=>{ updateURL(val); clearInterval(interval); }, 1000);
  }

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

  if(cat !== 'all'){
    var { data, loading, error } = FetchUrl(`http://localhost:1337/categories?name=${cat}`);

    if((data !== null && data.length > 0) && (!error)) data = data[0].articles
    // console.log(data)
  } else if(cat === 'all'){
    var { data, loading, error } = FetchUrl(`http://localhost:1337/articles`) || null;
    // if(data) console.log(data)
  }


  // console.log('query: ',query);
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

        {/* category filter */}
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
        <FilterQry width={w} query={query} handleChange={handleChange} />

        {/* article cards */}
        <div className="category-content">
        {data 
          ? data.map((article, i) => 
            <Card key={i} bg={`url(http://localhost:1337${article.title_image.formats.thumbnail.url})`}>
              <NavLink to={`/articles/${cat}/${article.slug}`} >
                <h3>{article.title}</h3>

              </NavLink>
            </Card>
            )

          : <div>Fetching data...</div>}

          {error && <div>{error}</div>}
      </div>
      
      </Wrapper>
    </>
  )
}

export default Category