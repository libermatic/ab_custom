// Copyright (c) 2016, Libermatic and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports['Simple Sales Register'] = {
  onload: ab_custom.reports.load_filters_on_load('Sales Register', (filters) =>
    filters.map((field) => {
      if (field.fieldname === 'from_date') {
        return { ...field, default: frappe.datetime.get_today() };
      }
      return field;
    })
  ),
  filters: [],
};
