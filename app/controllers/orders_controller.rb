class OrdersController < ApplicationController

  def index
    @orders = Order.all.where(user_id: session[:user_id])
    render json: @orders
  end

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
    params.permit(:user_id, :total, :item_count)
  end

end
