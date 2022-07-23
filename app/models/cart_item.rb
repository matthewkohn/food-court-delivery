class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item
  before_save :set_menu_name
  before_save :set_item_name

  def menu_name
    self.item.menu[:name]
  end

  def item_name
    self.item[:name]
  end


  private

  def set_menu_name
    self[:menu_name] = menu_name
  end

  def set_item_name
    self[:item_name] = item_name
  end

end
