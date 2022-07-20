class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    # byebug
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      # byebug
      session[:user_id] = @user.id
      render json: @user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    render json: { error: "Successfully logged out" }, status: :ok
  end


end
