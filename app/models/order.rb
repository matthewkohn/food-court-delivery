class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :items, through: :order_items
  # before_save :set_total

  # validates :total, presence: true, format: { with: /\A\d+(?:\.\d{2})?\z/ }, numericality: { greater_than: 0, less_than: 1000000 }

  # def item_count
  #   order_items.where(order_id: self[:order_id])
  # end


  # def total
  #   order_items.collect { |order_item| order_item.valid? ? order_item.unit_price * order_item.quantity : 0 }.sum
  # end

  # private

  # def set_total
  #   self[:total] = total
  # end

end
