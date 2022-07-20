class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :item_count, :created_at

  has_many :order_items, serializer: OrderItemSerializer
end
