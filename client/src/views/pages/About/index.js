import React from 'react'
import FetchUrl from '../../../utils/FetchUrl';



const About = () => {
  
  // const { data, loading, error } = FetchUrl('https://api.randomuser.me/');
  const { data, loading, error } = FetchUrl('http://localhost:1337/categories');
  
  console.log('data: ',data, 'loading: ',loading, 'error: ', error)
  if(error !== null){
    return ( <div>There was an error</div>)
  }
  return (
    <div>
      {/* {loading ? <div>...loading</div> : <div>{data.name.first}</div>} */}
    </div>
  )
}

export default About
