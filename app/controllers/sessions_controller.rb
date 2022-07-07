class SessionsController < ApplicationController
  # skip_before_action :authorize, only: :create

  def create
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      login_user
      render json: @user, status: :ok
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    render json: { errors: ["Successfully logged out"] }, status: :ok
  end


end
