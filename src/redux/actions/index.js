// Coloque aqui suas actions
export const ADD_LOGIN_INFO = 'ADD_LOGIN_INFO';

export const addLoginInfos = (email) => ({
  type: ADD_LOGIN_INFO,
  payload: {
    email,
  },
});
