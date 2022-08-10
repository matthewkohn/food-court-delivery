class CartsController < ApplicationController

  def index
    render json: @current_user.cart
  end

  def create
    new_cart = @current_user.cart.build(user_id: @current_user.id)
    if new_cart.valid?
      new_cart.save
      render json: new_cart, status: :created
    else
      render json: { error: "Bad request" }, status: 400
    end
  end


end
