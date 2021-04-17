import React, { useEffect, useRef, useState} from 'react'
import styled from 'styled-components';


const FilterQuery = styled.div`
&.filter-query{
  margin: 0 auto;
  width: 500px; height: auto;
  border: 1px solid black;


}
.filter-query-indicator{
  width: ${props => props.w+'px'};
  // width: 100px;
  height: 8px;
  background: red;
  border-radius: 1.5em;
  transition: width 91ms linear;
  &.loading{
    animation: animate 1s linear;
  }
  &.notloading{
    width: 0px;
    transition: width 1s ease;
  }
}

@keyframes animate {
  0%{
    width: 0px;
  }

  100%{
    width: 100px;
  }
}
`;

var timer = 0; // set initial value of url-update process
var interval = 0;
var width = 0;
const FilterQry = React.memo(({query, updateURL, setQuery, setParams}) => {
  
  const inputRef = useRef();
  
  const [w, setW] = useState(0);

  useEffect(()=>{
    inputRef.current.focus();
  }, [])

  const handleChange = (e) => {
    var val = e.target.value;
    


    // cancel url-update if process already scheduled
    if (timer) {
      clearTimeout(timer);
      clearInterval(interval);
      width = 0;
    }

    setQuery(val);
    setParams(val);

    
    interval = setInterval(()=>{
      setW(width+=20);
    }, 91);
    
    timer = setTimeout(()=>{ 
      width = 0; 
      clearInterval(interval); 
      clearTimeout(timer); 
      updateURL(val);   
    }, 1000);
  }

  console.log(width)

  
  return (
    <FilterQuery w={width} className="filter-query">
      <label>query search: </label><input ref={inputRef} autoComplete="off" id="q_search" value={query} onChange={handleChange} /> 
      <div className="filter-query-indicator"  /> 
    </FilterQuery>
  )
})

export default FilterQry
