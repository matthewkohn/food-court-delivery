class OrderItemSerializer < ActiveModel::Serializer
  attributes :item_id, :quantity, :subtotal, :unit_price
end
