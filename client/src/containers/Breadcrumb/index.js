import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HomeIcon } from '../../media/Icons';

// css
import { Wrapper } from './BreadcrumbCSS';

const Breadcrumb = ({ path, className }) => {

  const [thePath, setThePath] = useState([]);

  let pathsTxt = path.substr(1).split("/");
  pathsTxt.unshift(<HomeIcon/>); // add at HOME svg as first tab element

  let pathWithEndSlash = path.concat("/"); // add '/' at the end
  
  React.useEffect(()=>{
    for(let i=0; i < pathWithEndSlash.length; i++){ 
      if(pathWithEndSlash.charAt(i) === "/"){ // loop through every char
        // push each location, eg: "/articles/programming"
        setThePath(oldArr => [...oldArr, pathWithEndSlash.slice(0, i)]);
      }
    }
  }, [])

  return (
    <Wrapper className={className}>
      {thePath.length > 0 && pathsTxt.map((link, i)=>(
        <div key={i}>
          <Link to={`${thePath[i]}`}>{link}</Link>
          {thePath.length > i+1 ? <span>/</span> : null}
        </div>
      ))}
    </Wrapper>
  )
}

export default Breadcrumb