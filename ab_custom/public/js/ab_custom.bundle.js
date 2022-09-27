import * as reports from './reports';
import { __version__ } from './version';

frappe.provide('ab_custom');
ab_custom = { __version__, reports };

frappe.form.link_formatters['Customer'] = function (value, doc) {
  if (doc.customer_name && doc.customer_name !== value) {
    return `${value}: ${doc.customer_name}`;
  }
  return value;
};
