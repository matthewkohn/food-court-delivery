class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :item_count, :created_at
  
end
