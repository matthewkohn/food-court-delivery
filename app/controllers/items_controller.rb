class ItemsController < ApplicationController
  before_action :set_current_menu, only: [:index, :create]

  def index
    items = @current_menu.items
    render json: items
  end

  def create
    item = @current_menu.items.build(items_params)
    if item.valid?
      item.save!
      render json: item, status: :created
    else
      render json: {error: ["Nope"]}, status: 400
    end
  end


  private

  def items_params
    params.permit(:id, :name, :price, :description)
  end

  def set_current_menu
    @current_menu = Menu.find_by(id: params[:menu_id])
  end

end
