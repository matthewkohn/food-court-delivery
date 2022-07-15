class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.decimal :price, precision: 8, scale: 2
      t.text :description
      t.belongs_to :menu, null: false, foreign_key: true

      t.timestamps
    end
  end
end
