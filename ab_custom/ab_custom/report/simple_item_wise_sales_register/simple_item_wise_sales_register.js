// Copyright (c) 2016, Libermatic and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports['Simple Item-wise Sales Register'] = {
  onload: ab_custom.reports.load_filters_on_load('Item-wise Sales Register'),
  filters: [],
};
