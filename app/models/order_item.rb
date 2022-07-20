class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :item

  # Columns: :order_id, :item_id, :quantity, :unit_price and :subtotal
  # 


  
end