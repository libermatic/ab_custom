import { makeExtension } from './utils';

export default function item_idx(ItemCart) {
  return makeExtension(
    'item_idx',
    class ItemCartWithItemIdx extends ItemCart {
      render_cart_item(item_data, $item_to_update) {
        super.render_cart_item(item_data, $item_to_update);
        this.get_cart_item(item_data).find('.item-image').replaceWith(`
          <div class="item-serial">${item_data.idx}.</div>
        `);
      }
    }
  );
}
