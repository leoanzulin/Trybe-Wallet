const URL = 'https://economia.awesomeapi.com.br/json/all';

const apiRequest = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return Promise.resolve(json);
};

export default apiRequest;
