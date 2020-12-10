import { load_filters_on_load } from './utils';

export function simple_item_wise_sales_register() {
  return {
    onload: load_filters_on_load('Item-wise Sales Register'),
    filters: [],
  };
}
