class OrdersController < ApplicationController

  def create
    @order = Order.new(order_params)
    if @order.valid?
      @order.save
      render json: @order
    else
      render json: { error: "Bad request" }, status: 400
    end
  end



  private

  def order_params
    params.permit(
      :user_id, 
      :total, 
      :item_count, 
      order_items_attributes: [:item_id, :unit_price, :quantity, :subtotal] 
    )
  end

end
