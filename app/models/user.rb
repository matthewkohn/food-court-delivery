class User < ApplicationRecord
  has_many :orders, dependent: :destroy
  has_one :cart, dependent: :destroy

  has_secure_password

  validates :username, presence: true, uniqueness: true, length: { in: 4..20 }
  validates :password, length: { in: 5..20 }
  
end
