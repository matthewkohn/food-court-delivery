class CartItemsController < ApplicationController
  before_action :set_cart, only: [:index, :create, :empty_cart]
  before_action :set_cart_item, only: [:update, :destroy]

  def index
    render json: @cart.cart_items
  end

  def create
    cart_item = @cart.cart_items.build(cart_item_params)
    if cart_item.valid?
      cart_item.save
      render json: cart_item, status: :created
    else
      render json: { error: "Bad request" }, status: 400
    end
  end

  def update
    @cart_item.update(cart_item_params)
    render json: @cart_item
  end

  def destroy
    @cart_item.destroy
    render json: { error: "#{@cart_item[:item_name]} has been removed from your cart."}
  end

  def empty_cart
    @cart.cart_items.destroy_all
    head :no_content
  end


  private

  def cart_item_params
    params.permit(:id, :item_id, :quantity)
  end

  def set_cart_item
    @cart_item = @current_user.cart.cart_items.find_by(id: params[:id])
  end

  def set_cart
    @cart = @current_user.cart
  end

end
