class OrderItemSerializer < ActiveModel::Serializer
  attributes :item_id, :quantity, :unit_price, :subtotal, :item_name, :menu_name
end
