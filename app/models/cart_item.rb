class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  validates :item_name, uniqueness: true
  validates :quantity, numericality: { only_integer: true }
  validates :unit_price, :subtotal, presence: true, format: { with: /\A\d+(?:\.\d{2})?\z/ }, numericality: { in: 1..1000000 }

  before_save :set_menu_name
  before_save :set_item_name
  before_save :set_unit_price
  before_save :set_subtotal
  
end
