class OrderItemSerializer < ActiveModel::Serializer
  attributes :item_id, :quantity, :unit_price, :subtotal
end
