class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description
end
