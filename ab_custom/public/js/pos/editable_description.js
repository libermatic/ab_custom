import { makeExtension } from './utils';

export default function editable_description(ItemDetails) {
  return makeExtension(
    'editable_description',
    class ItemDetailsWithEditableDescription extends ItemDetails {
      render_dom(item) {
        super.render_dom(item);
        this._render_item_description(item);
        this.$item_description
          .css('cursor', 'pointer')
          .off('click')
          .on('click', () => this._edit_description(item));
      }

      _render_item_description(item) {
        this.$item_description.html(`
          <span>${item.description}</span>
          <span class="edit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </span>
        `);
      }

      _edit_description(item) {
        const dialog = new frappe.ui.Dialog({
          title: `Updating Description for row # ${item.idx}`,
          fields: [
            {
              fieldtype: 'Data',
              label: 'Item Code',
              default: item.item_code,
              read_only: 1,
            },
            { fieldtype: 'Column Break' },
            {
              fieldtype: 'Data',
              label: 'Item Name',
              default: item.item_name,
              read_only: 1,
            },
            { fieldtype: 'Section Break', label: 'Description' },
            {
              fieldtype: 'Text',
              fieldname: 'description',
              default: item.description,
            },
          ],
        });
        dialog.set_primary_action('OK', () => {
          item.description = frappe.utils.html2text(
            dialog.get_value('description') || ''
          );
          dialog.hide();
          this._render_item_description(item);
        });
        dialog.onhide = () => dialog.$wrapper.remove();
        dialog.show();
      }
    }
  );
}

export function editable_description_cart(ItemCart) {
  return makeExtension(
    'editable_description_cart',
    class ItemCartWithEditableDescription extends ItemCart {
      render_cart_item(item_data, $item_to_update) {
        const { description } = item_data;
        super.render_cart_item(item_data, $item_to_update);
        item_data.description = description;
      }
    }
  );
}
