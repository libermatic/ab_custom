import { makeExtension } from './utils';

export default function styled(Pos) {
  return makeExtension(
    'styled',
    class PosWithStyled extends Pos {
      async make() {
        const result = await super.make();
        frappe.require(['assets/ab_custom/css/pos.css']);
        return result;
      }
    }
  );
}

export function styledItems(Items) {
  return makeExtension(
    'styledItems',
    class ItemsWithStyled extends Items {
      make_dom() {
        super.make_dom();
        this.items_wrapper.find('.pos-items').addClass('list-group');
      }
      render_items(items) {
        const all_items = Object.values(items || this.items).map((item) =>
          this.get_item_html(item)
        );
        this.clusterize.update(all_items);
      }
      get_item_html({
        item_code,
        item_name,
        price_list_rate,
        actual_qty,
        stock_uom,
      }) {
        return `
          <a class="pos-item-wrapper list-group-item list-group-item-action" data-item-code="${escape(
            item_code
          )}">
            <div>
              <div>${item_name || item_code}</div>
              <div class="small">
                ${item_code} · ${actual_qty || 0} ${stock_uom || ''}
              </div>
            </div>
            <div>${format_currency(price_list_rate, this.currency)}</div>
          </a>
        `;
      }
    }
  );
}
