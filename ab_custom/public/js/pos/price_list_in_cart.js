import { makeExtension } from './utils';

export default function price_list_in_cart(ItemCart) {
  return makeExtension(
    'price_list_in_cart',
    class ItemCartWithPriceListRate extends ItemCart {
      render_cart_item(item_data, $item_to_update) {
        super.render_cart_item(item_data, $item_to_update);
        const $description = this.get_cart_item(item_data).find('.item-desc');
        $description.empty();
        if (item_data.price_list_rate !== item_data.rate) {
          $description.html(
            `<s>${fmt_money(item_data.price_list_rate)}</s>
            <span style="font-size: var(--text-xs); background-color: var(--gray-300); padding: 2px var(--padding-sm); border-radius: var(--border-radius-sm);">
              ${item_data.discount_percentage}% off
            </span>`
          );
        }
      }
    }
  );
}
