class OrderItemSerializer < ActiveModel::Serializer
  attributes :item_id, :item_name, :menu_name, :quantity, :subtotal, :unit_price
end
