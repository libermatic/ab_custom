import { makeExtension } from './utils';

export default function item_idx(Cart) {
  return makeExtension(
    'item_idx',
    class CartWithItemIdx extends Cart {
      get_item_html(item) {
        const $result = $(super.get_item_html(item));
        $result.find('.item-name').before(`
          <div style="font-weight: normal; padding: 0 0.5em;">${item.idx}.</div>
        `);
        return $result[0];
      }
    }
  );
}
