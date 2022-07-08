class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  def show
    render json: @current_user, status: :ok
    
  end

  # def update for delivery_address

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :admin, :delivery_address)
  end


end
