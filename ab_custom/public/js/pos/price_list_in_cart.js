import { makeExtension } from './utils';

export default function price_list_rate(Cart) {
  return makeExtension(
    'price_list_rate',
    class CartWithPriceListRate extends Cart {
      get_item_html(item) {
        const $result = $(super.get_item_html(item));
        $result
          .find('.item-name')
          .removeClass('list-item__content')
          .css({ flex: '1', 'margin-right': '15px' })
          .html(
            `
              <div>${item.item_name}</div>
              <div class="small" style="font-weight: normal;">
                PLR: ${fmt_money(item.price_list_rate)}
              </div>
            `
          );
        return $result[0];
      }
    }
  );
}
