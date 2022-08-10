class Item < ApplicationRecord
  belongs_to :menu
  has_many :cart_items

  validates :name, presence: true, uniqueness: true
  
end
