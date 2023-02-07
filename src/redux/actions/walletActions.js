import apiRequest from '../../services/moneyApi';

export const REQUEST_SUCESS = 'REQUEST_SUCESS';
export const ADD_FORM_INFO = 'ADD_FORM_INFO';

const requestSucess = (result) => (
  { type: REQUEST_SUCESS,
    payload: result,
  }
);

export const requestApi = () => async (dispatch) => {
  const result = await apiRequest();
  delete result.USDT;
  dispatch(requestSucess(Object.keys(result)));
};

const addExpense = (info) => ({
  type: ADD_FORM_INFO,
  payload: info,
});

export const requestApi2 = (data) => async (dispatch) => {
  const result = await apiRequest();
  delete result.USDT;
  const info = { ...data, exchangeRates: result };
  dispatch(addExpense(info));
};
