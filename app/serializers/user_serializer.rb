class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :admin, :delivery_address
end
