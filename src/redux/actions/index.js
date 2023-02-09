// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_INFOS = 'SAVE_INFOS';
export const SAVE_COINS = 'SAVE_COINS';
export const SAVE_NEW_EXPENSES = ' SAVE_NEW_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EXPENSE_EDITED = 'EXPENSE_EDITED';

export const actionSaveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const saveCurrencies = (payload) => ({
  type: SAVE_CURRENCIES,
  payload,
});

export const saveInfos = (payload) => ({
  type: SAVE_INFOS,
  payload,
});

export const saveCoins = (payload) => ({
  type: SAVE_COINS,
  payload,
});

export const saveNewExpenses = (payload) => ({
  type: SAVE_NEW_EXPENSES,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
  // id,
});

export const expenseEdited = (payload) => ({
  type: EXPENSE_EDITED,
  payload,
});

export const requestAPI = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json(); // falta testes
  return dispatch(saveCurrencies(data)); // falta testes
};
