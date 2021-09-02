import { makeExtension } from './utils';

/**
 * spec to prevent search result from resetting when an item is selected
 */
export default function no_search_reset(ItemSelector) {
  return makeExtension(
    'no_search_reset',
    class ItemSelectorWithNoSearchReset extends ItemSelector {
      bind_events() {
        super.bind_events();
        this.$component.off('click', '.item-wrapper');
        const me = this;
        this.$component.on('click', '.item-wrapper', function () {
          const $item = $(this);
          const item_code = unescape($item.attr('data-item-code'));
          let batch_no = unescape($item.attr('data-batch-no'));
          let serial_no = unescape($item.attr('data-serial-no'));
          let uom = unescape($item.attr('data-uom'));
          let rate = unescape($item.attr('data-rate'));

          // escape(undefined) returns "undefined" then unescape returns "undefined"
          batch_no = batch_no === 'undefined' ? undefined : batch_no;
          serial_no = serial_no === 'undefined' ? undefined : serial_no;
          uom = uom === 'undefined' ? undefined : uom;
          rate = rate === 'undefined' ? undefined : rate;

          me.events.item_selected({
            field: 'qty',
            value: '+1',
            item: { item_code, batch_no, serial_no, uom, rate },
          });

          // me.set_search_value('');
        });
      }
    }
  );
}
