class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :delivery_address
end
