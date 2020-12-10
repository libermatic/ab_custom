import { load_filters_on_load } from './utils';

export function simple_sales_register() {
  return {
    onload: load_filters_on_load('Sales Register'),
    filters: [],
  };
}
