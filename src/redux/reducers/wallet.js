
import {
  EDIT_EXPENSE,
  SAVE_COINS,
  SAVE_CURRENCIES,
  SAVE_NEW_EXPENSES,
  EXPENSE_EDITED,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
  case SAVE_CURRENCIES:
    delete payload.USDT;
    return {
      ...state,
      currencies: Object.keys(payload),
    };
  case SAVE_COINS:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      isEdit: false,
    };
  case SAVE_NEW_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter(
        ({ id }) => Number(id) !== Number(payload),
      ),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: payload,
      idExpense: payload.id,
      isEdit: true,
    };
  case EXPENSE_EDITED:
    return {
      ...state,
      // expenses: state.expenses.reduce((acc, curr) => {
      //   if (curr.id === acc) return { ...curr, ...payload };
      //   return curr;
      // }, payload.id),
      isEdit: false,
      expenses: state.expenses.map((obj) => {
        if (obj.id === payload.id) {
          return { ...obj, ...payload };
        }
        return obj;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
