import * as reports from './reports';

const __version__ = '0.0.2';

frappe.provide('ab_custom');
ab_custom = { __version__, reports };
