import { load_filters_on_load } from './utils';

export function simple_sales_register() {
  return {
    onload: load_filters_on_load('Sales Register', (filters) =>
      filters.map((field) => {
        if (field.fieldname === 'from_date') {
          return { ...field, default: frappe.datetime.get_today() };
        }
        return field;
      })
    ),
    filters: [],
  };
}
