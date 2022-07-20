class OrdersController < ApplicationController


  def create
    # when created, iterate through order_items and OrderItem.new each
    # need to set :total and :item_count in each Order
    # 
    # byebug
    @order = Order.new(user_id: session[:user_id])
    # byebug
    if @order.save
      # byebug
      params[:order_items].each do |item|
        # byebug
        OrderItem.create!(order_id: @order.id, item_id: item[:item_id], quantity: item[:quantity])
      end
      render json: @order
    else
      render json: { error: "Bad request" }, status: 400
    end 

  end



  private



  # def order_params
  #   params.permit(:order_items)
  #       # params.permit(user_id: session[:user_id], :total, :item_count, :order_items)
  # end


end
