import React from 'react'
import { FilterQuery } from './CategoryCSS';

const FilterQry = ({width, query, handleChange}) => {

  // const [w, setW] = React.useState(width);
  // console.log(w)
  // React.useEffect(()=>{
  //   setW(width)
  // },[width])
  return (
    <FilterQuery w={width} className="filter-query">
      <label>query search: </label><input autoComplete="off" id="q_search" value={query} onChange={handleChange} /> 
      <div className="filter-query-indicator" /> {width}%
    </FilterQuery>
  )
}

export default FilterQry
