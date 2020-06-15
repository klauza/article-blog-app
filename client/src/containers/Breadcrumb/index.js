import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// css
import { Wrapper } from './BreadcrumbCSS';

const Breadcrumb = ({ path }) => {

  const [thePath, setThePath] = useState([]);
  
  // delete first slash
  let paths = path.substr(1);
  let pathsTxt = path.substr(1).split("/");
  console.log(pathsTxt);

  // add '/' at the end
  var pathWithSlash = paths.concat("/");

  
  let array = [];
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
        <Link key={i} to={`/${thePath[i]}`}>{link}</Link>
      ))}
    </Wrapper>
  )
}

export default Breadcrumb
