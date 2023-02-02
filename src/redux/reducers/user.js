import { ADD_LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_LOGIN_INFO:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default user;
