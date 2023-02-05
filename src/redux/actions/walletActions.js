import apiRequest from '../../services/moneyApi';

export const REQUEST_SUCESS = 'REQUEST_SUCESS';

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
