class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.integer :quantity
      t.decimal :unit_price
      t.decimal :subtotal
      t.string :item_name
      t.string :menu_name

      t.timestamps
    end
  end
end
