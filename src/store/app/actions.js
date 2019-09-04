import { IS_OPEN_BURGER_MENU } from './constants';

export const onIsOpenBurgerMenu = bool => {
  return {
    type: IS_OPEN_BURGER_MENU,
    bool
  };
};
