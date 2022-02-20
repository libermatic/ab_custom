import { makeExtension } from './utils';

export default function item_idx(ItemCart) {
  return makeExtension(
    'item_idx',
    class ItemCartWithItemIdx extends ItemCart {
      update_item_html(item, remove_item) {
        super.update_item_html(item, remove_item);
        if (remove_item) {
          this.$cart_items_wrapper.find('.cart-item-wrapper > .item-serial').each(function(index) {
            $(this).text(index + 1);
          });
        }
      }
      render_cart_item(item_data, $item_to_update) {
        super.render_cart_item(item_data, $item_to_update);
        this.get_cart_item(item_data).find('.item-image').replaceWith(`
          <div class="item-serial">${item_data.idx}.</div>
        `);
      }
    }
  );
}
