class CartItemsController < ApplicationController

  def index
    @user = User.find_by(id: session[:user_id])
    @cart_items = CartItem.all.where(cart_id: @user.cart.id)
    render json: @cart_items
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    @cart = Cart.find_by(user_id: session[:user_id])
    @cart_item[:cart_id] = @cart.id
    if @cart_item.valid?
      @cart_item.save!
      render json: @cart_item, status: :created
    else
      render json: { error: "Bad request" }, status: 400
    end
  end

  def update
    @cart_item = CartItem.find(params[:id])
    @cart_item.update(cart_item_params)
    render json: @cart_item
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render json: { error: "Item has been removed from your cart."}
  end

  def empty_cart
    @cart = Cart.find_by(user_id: session[:user_id])
    @cart.cart_items.destroy_all
    head :no_content
  end


  private

  def cart_item_params
    params.permit(:id, :item_id, :quantity)
  end


end
