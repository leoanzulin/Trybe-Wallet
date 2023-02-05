const URL = 'https://economia.awesomeapi.com.br/json/all';

const apiRequest = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default apiRequest;
