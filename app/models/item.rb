class Item < ApplicationRecord
  belongs_to :menu
  has_many :cart_items

  validates :name, presence: true, uniqueness: true
  validates :price, presence: true, format: { with: /\A\d+(?:\.\d{2})?\z/ }, numericality: { in: 1..1000000 }
  
end
