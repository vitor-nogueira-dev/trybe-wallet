import { SAVE_EMAIL } from '../actions/index';

const initialState = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
