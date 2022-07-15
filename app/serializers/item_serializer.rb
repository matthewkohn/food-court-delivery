class ItemSerializer < ActiveModel::Serializer
  attributes :name, :price, :description
end
