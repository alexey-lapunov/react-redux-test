import { IS_OPEN_BURGER_MENU } from './constants';

const defaultState = {
  isOpenBurgerMenu: false
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_OPEN_BURGER_MENU:
      return {
        ...state,
        isOpenBurgerMenu: action.bool
      };
    default:
      return state;
  }
};

export default appReducer;
