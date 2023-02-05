// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_SUCESS } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
