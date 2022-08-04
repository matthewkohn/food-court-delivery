class CartItemsController < ApplicationController

  def index
    @cart_items = CartItem.all.where(cart_id: @current_user.cart.id)
    render json: @cart_items
  end

  def create
    find_cart
    @cart_item = CartItem.new(cart_item_params)
    @cart_item[:cart_id] = @cart.id
    if @cart_item.valid?
      @cart_item.save!
      render json: @cart_item, status: :created
    else
      render json: { error: "Bad request" }, status: 400
    end
  end

  def update
    find_cart_item
    @cart_item.update(cart_item_params)
    render json: @cart_item
  end

  def destroy
    find_cart_item
    @cart_item.destroy
    render json: { error: "#{@cart_item[:item_name]} has been removed from your cart."}
  end

  def empty_cart
    find_cart
    @cart.cart_items.destroy_all
    head :no_content
  end


  private

  def cart_item_params
    params.permit(:id, :item_id, :quantity)
  end


end
