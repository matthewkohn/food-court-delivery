class AddItemIdToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_reference :cart_items, :item, index: true
  end
end
