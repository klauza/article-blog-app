import {useEffect, useState} from 'react'

function FetchUrl(url, options){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () =>{
      try{
        const response = await fetch(url, options);
        const data = await response.json();
        if(data.length === 0){
          setError('No articles')
        }
        if (!signal.aborted) {
          setData(data); // TO SAMO: const [item] = data.results
        }
      } catch(e){
        console.log(e)
        if (!signal.aborted) {
          setError(e);
        }
        
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
        
      }
    }
    fetchData(url);

    return () => {
      abortController.abort();
      console.log('fetch aborted');
    }
  }, [])

  console.log({ data, loading, error })
  return { data, loading, error }

}

export default FetchUrl
