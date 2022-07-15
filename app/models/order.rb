class Order < ApplicationRecord
  belongs_to :user
  has_many :items
  has_many :menus, through: :items

  validates :total, presence: true, format: { with: /\A\d+(?:\.\d{2})?\z/ }, numericality: { greater_than: 0, less_than: 1000000 }


end
