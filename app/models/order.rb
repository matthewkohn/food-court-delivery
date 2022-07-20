class Order < ApplicationRecord
  belongs_to :user
  has_many :order_items
  has_many :items, through: :order_items
  accepts_nested_attributes_for :order_items

  # TO DO:
  # 1. Create an OrderItem for every object in :order_items received
  #   a. Map through :order_items & create an order_item for each object
  #      i. receive order_item_params = params.permit(:item_id, :quantity, :order_items)
  
  # @order = Order.create(user_id: session[:user_id], :total, :item_count)
  # if @order.valid?
  #   params[:order_items].each do |item|
  #     OrderItem.create(order_id: @order.id, item_id: item.item_id, quantity: item.quantity)
  #   end
  # else
  #   render json: { error: ["Bad request"] }, status: :402
  # end  
  
  #       , :unit_price and :subtotal are added after order_item is created using its association to :item_id



  #      ii. retrieve from :item_id, => :unit_price = :price, :item_name = :name

  #      iii. calculate :subtotal = :quantity * :unit_price
  
  #      iii. return json: (
              #   :item_name, 
              #   :unit_price, 
              #   :quantity, 
              #   :subtotal, 
              #   :user_id, 
              #   :order_id, 
              #   :created_at
              # )

  # 2. Set :total before saving Order
  #   a. find each item
  #   b. collect price & name from each item and set it in order_item
  #   c. calculate total from prices & quantity sent from frontend
  #   d. set Order :total and :item_count for every Order placed

  # 3. Set :item_count before saving Order








  # def item_count
  #   order_items.where(order_id: self[:order_id])
  # end




end
