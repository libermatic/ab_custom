import { makeExtension } from './utils';

export default function modified_item_view(ItemSelector) {
  return makeExtension(
    'modified_item_view',
    class ItemSelectorWithModifiedItemView extends ItemSelector {
      get_item_html(item) {
        const $result = $(super.get_item_html(item));
        $result.find('.item-display').remove();

        const $indicator = $result.find('.item-name > .indicator');

        $result.find('.item-name').html(`
          <div class="item-name--primary">
            ${$indicator.wrap('<div />').parent().html()} ${item.item_name}
          </div>
          <div class="item-name--secondary">
            ${item.item_code} ·
            ${item.actual_qty || 0}
            ${item.stock_uom || ''}
          </div>
        `);

        return $result[0];
      }

      resize_selector(minimize) {
        super.resize_selector(minimize);

        minimize
          ? this.$component.css('display', 'none')
          : this.$component.css('display', 'flex');

        this.$component.css('grid-column', 'span 5 / span 5');
        this.$items_container.css(
          'grid-template-columns',
          'repeat(1, minmax(0, 1fr))'
        );
      }
    }
  );
}
