import * as reports from './reports';

const __version__ = '13.0.2';

frappe.provide('ab_custom');
ab_custom = { __version__, reports };

frappe.form.link_formatters['Customer'] = function (value, doc) {
  if (doc.customer_name && doc.customer_name !== value) {
    return `${value}: ${doc.customer_name}`;
  }
  return value;
};

$(document).ajaxError(function (_event, jqXHR, ajaxSettings, thrownError) {
  if (
    jqXHR.status === 400 &&
    jqXHR.responseJSON &&
    jqXHR.responseJSON.exc_type === 'CSRFTokenError'
  ) {
    frappe.msgprint(
      __(`
        CSRF Token not invalid.
        Subsequent requests will fail.
        Manually browser <strong>REFRESH</strong> required to recover.
      `)
    );
  }
});
