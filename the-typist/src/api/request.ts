const get = async (url:string, endPoint:string) => {
    let response;
  
    response = await fetch(url + endPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      }
    });
    await response.json().then((json) => {
      response = json;
    });
      
    return response;
}

const post = async (url:string, endPoint:string, obj:object) => {
  let response;

  response = await fetch(url + endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  });
  await response.json().then((json) => {
    response = json;
  });
  
  return response;
}

const API = {
    get,
    post,
    host: 'http://localhost:4000' 
}

export default API;