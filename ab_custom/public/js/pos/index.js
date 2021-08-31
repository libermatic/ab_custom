import modified_item_view from './modified_item_view';
import price_list_in_cart from './price_list_in_cart';
import item_idx from './item_idx';
import editable_description from './editable_description';
import no_search_reset from './no_search_reset';

export const selectorOverrides = [no_search_reset, modified_item_view];
export const detailOverrides = [editable_description];
export const cartOverrides = [price_list_in_cart, item_idx];
