class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  before_save :set_menu_name
  before_save :set_item_name
  before_save :set_unit_price
  before_save :set_subtotal
  
end
