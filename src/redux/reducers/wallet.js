// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_SUCESS, ADD_FORM_INFO } from '../actions/walletActions';
import { DELETE_ITEM } from '../actions/formActions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_SUCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_FORM_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_ITEM:
    return {
      ...state,
      expenses: state.expenses.filter((expencie) => expencie.id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
