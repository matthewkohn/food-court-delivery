class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :unit_price, :subtotal, :item_name, :menu_name, :created_at, :updated_at, :item_id
end
