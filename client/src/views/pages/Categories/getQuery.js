export default function getQuery(location){
  const params = getParams(location);

  return params.search
}

function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    search: searchParams.get('search') || ''
  };
}