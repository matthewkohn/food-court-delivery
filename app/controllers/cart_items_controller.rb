class CartItemsController < ApplicationController

  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.valid?
      @cart_item.save
      render json: @cart_item
    else
      render json: { error: "Bad request" }, status: 400
    end
  end


  private

  def cart_item_params
    params.permit(:cart_id, :quantity, :unit_price, :subtotal, :item_name, :menu_name)
  end


end
