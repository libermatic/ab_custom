import { makeExtension } from './utils';

export default function item_idx(ItemCart) {
  return makeExtension(
    'item_idx',
    class ItemCartWithItemIdx extends ItemCart {
      render_cart_item(item_data, $item_to_update) {
        super.render_cart_item(item_data, $item_to_update);
        this.get_cart_item(item_data).find('.item-name').html(`
          <span style="font-size: var(--text-sm); color: var(--gray-600); font-weight: normal; ">
            ${item_data.idx}.
          </span>
          ${item_data.item_name}
        `);
      }
    }
  );
}
