class Order < ApplicationRecord
  belongs_to :user

  validates :item_count, numericality: { only_integer: true }
  validates :total, presence: true, format: { with: /\A\d+(?:\.\d{2})?\z/ }, numericality: { in: 1..1000000 }

end
