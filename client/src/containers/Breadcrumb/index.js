import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HomeIcon } from '../../media/Icons';

// css
import { Wrapper } from './BreadcrumbCSS';

const Breadcrumb = ({ path }) => {

  const [thePath, setThePath] = useState([]);
  
  // delete first slash
  let paths = path
  // .substr(1);

  let pathsTxt = path.substr(1).split("/");
  pathsTxt.unshift(<HomeIcon/>);  // add at the beginning for HOME icon
  // console.log(pathsTxt);

  // add '/' at the end
  var pathWithSlash = paths.concat("/");
  // console.log(pathWithSlash)
  
  // let array = [];
  React.useEffect(()=>{

    for(let i=0; i < pathWithSlash.length; i++){ // length = 28
      // console.log(paths.charAt(i)); // listing all the letters
      if(pathWithSlash.charAt(i) === "/"){
        // array.push(pathWithSlash.slice(0, i))
        setThePath(oldArr => [...oldArr, pathWithSlash.slice(0, i)]);
      }
    }

    

  }, [])

  console.log(thePath);
  // let pathsb = paths.forEach((p)=>console.log(`${p}`))

  return (
    <Wrapper>
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
