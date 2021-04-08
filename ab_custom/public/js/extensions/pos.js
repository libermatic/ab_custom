import { compose } from 'ramda';

import { selectorOverrides, detailOverrides, cartOverrides } from '../pos';

frappe.provide('ab_custom.pos');

ab_custom.pos.override = function (ns) {
  if (ns.ItemSelector) {
    ns.ItemSelector = compose(...selectorOverrides)(ns.ItemSelector);
  }
  if (ns.ItemDetails) {
    ns.ItemDetails = compose(...detailOverrides)(ns.ItemDetails);
  }
  if (ns.ItemCart) {
    ns.ItemCart = compose(...cartOverrides)(ns.ItemCart);
  }
};
