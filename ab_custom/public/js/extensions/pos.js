import { compose } from 'ramda';

import { pageOverrides, itemsOverrides, cartOverrides } from '../pos';

const pos = {
  page: compose(...pageOverrides),
  items: compose(...itemsOverrides),
  cart: compose(...cartOverrides),
};

export default pos;
