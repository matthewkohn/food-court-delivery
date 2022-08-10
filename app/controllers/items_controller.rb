class ItemsController < ApplicationController

  def index
    items = Item.all
    render json: items
  end

  def create
    # byebug
    current_menu = Menu.find_by(id: params[:menu_id])
    @item = current_menu.items.build(items_params)
    if @item.valid?
      @item.save!
      render json: @item, status: :created
    else
      render json: {error: ["Nope"]}, status: 400
    end
  end


  private

  def items_params
    params.permit(:id, :name, :price, :description, :menu_id)
  end

end
