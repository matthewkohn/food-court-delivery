class RemoveDeliveryAddressAndAdminFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :delivery_address, :string
    remove_column :users, :admin, :boolean
  end
end
