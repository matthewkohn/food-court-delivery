class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.decimal :total, precision: 8, scale: 2
      t.integer :item_count
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
