class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    @user = User.new(user_params)
    if @user.save
      login_user
      render json: @user, status: :created
    end
  end

  def get_current_user
    if logged_in?
      render json: @current_user, status: :ok
    else
      render json: { errors: ["There is currently no user logged in."] }, status: :bad_request
    end
  end

  # def update for delivery_address

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :admin, :delivery_address)
  end


end
