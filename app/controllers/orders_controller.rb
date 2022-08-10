class OrdersController < ApplicationController
  before_action :set_orders, only: [:index, :create]

  def index
    render json: @orders
  end

  def create
    order = @orders.build(order_params)
    if order.valid?
      order.save
      render json: order
    else
      render json: { error: "Bad request" }, status: 400
    end
  end


  private

  def order_params
    params.permit(:total, :item_count)
  end

  def set_orders
    @orders = @current_user.orders
  end

end
