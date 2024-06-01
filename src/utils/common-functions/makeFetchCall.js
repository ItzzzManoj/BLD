const makeFetchCall = async (url) => {
  
  const data = await fetch(url);
  const dataJSON = await data.json();

  return dataJSON;
}

export default makeFetchCall;