class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item
  before_save :set_menu_name
  before_save :set_item_name
  before_save :set_unit_price
  before_save :set_subtotal

  def menu_name
    self.item.menu[:name]
  end

  def item_name
    self.item[:name]
  end

  def unit_price
    self.item[:price]
  end

  def subtotal
    self[:quantity] * unit_price
  end

  private

  def set_menu_name
    self[:menu_name] = menu_name
  end

  def set_item_name
    self[:item_name] = item_name
  end

  def set_unit_price
    self[:unit_price] = unit_price
  end

  def set_subtotal
    self[:subtotal] = subtotal
  end


end
