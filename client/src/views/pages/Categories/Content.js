import React from 'react'
import { NavLink } from 'react-router-dom';
import { Card, Wrapper } from './CategoryCSS';
import FetchUrl from '../../../utils/FetchUrl';

const Content = React.memo(({ cat }) => {

  // const [d, setD] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // const [loading, setLoading] = React.useState(true);
  

  // React.useEffect(()=>{
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;

  //   const fetchData = async () =>{
  //     try{
  //       let response;
  //       if(cat === 'all'){
  //         response = await fetch(`http://localhost:1337/articles`);
         
  //       } else{
  //         response = await fetch(`http://localhost:1337/categories?name=${cat}`);
  //       }
  //       let data = await response.json();

  //       if(cat !== 'all'){
  //         data = data[0].articles;
  //       }

  //       // if(data)
  //       if(data.length === 0){
  //         setError('No articles')
  //       }
  //       if (!signal.aborted) {
  //         setD(data); // TO SAMO: const [item] = data.results
  //       }
  //     } catch(e){
  //       console.log('is error = true')
  //       if (!signal.aborted) {
  //         setError(e);
  //       }
        
  //     } finally {
  //       console.log('finally')
  //       if (!signal.aborted) {
  //         setLoading(false);
  //       }
        
  //     }
  //   }
  //   fetchData();
  // }, [])


  if(cat !== 'all'){
    var { data, loading, error } = FetchUrl(`http://localhost:1337/categories?name=${cat}`);

    if((data !== null && data.length > 0) && (!error)) data = data[0].articles

    
    // console.log(data)
  } else if(cat === 'all'){
    var { data, loading, error } = FetchUrl(`http://localhost:1337/articles`) || null;
    // if(data) console.log(data)
    
  }
  
  console.log('error: ', error)
  console.log('render')
  return (
    <div className="category-content">
      {loading && <div>I AM LOADING</div>}
      {data
        ? data.map((article, i) => 
          <Card key={i} style={{background: `url(http://localhost:1337${article.title_image.formats.thumbnail.url})`}}>
            <NavLink to={`/articles/${cat}/${article.slug}`} >
              <h3>{article.title}</h3>

            </NavLink>
          </Card>
          )

        : <div>Fetching data...</div>}

        {/* {error && <div>{error}</div>} */}
    </div>
  )
})

export default Content
