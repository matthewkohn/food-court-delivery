class MenusController < ApplicationController
  
  def index
    menus = Menu.all
    render json: menus
  end

  def show
    full_menu = Menu.find_by(id: params[:id])
    render json: full_menu, serializer: MenuWithItemsSerializer
  end


end
