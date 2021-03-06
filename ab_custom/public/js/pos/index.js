import styled, { styledItems } from './styled';
import price_list_in_cart from './price_list_in_cart';
import item_idx from './item_idx';

export const pageOverrides = [styled];
export const itemsOverrides = [styledItems];
export const cartOverrides = [price_list_in_cart, item_idx];
