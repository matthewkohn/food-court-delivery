class AddMenuNameAndItemNameToOrderItems < ActiveRecord::Migration[6.1]
  def change
    add_column :order_items, :menu_name, :string
    add_column :order_items, :item_name, :string
  end
end
