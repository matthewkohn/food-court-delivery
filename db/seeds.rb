# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "Seeding............."
puts "....."

require 'faker'

User.create(username: "Matt", password: "happy", admin: true)
User.create(username: "Logan", password: "running")

ice_cream = Menu.create(name: "99 Flavors Ice Cream Shop")
mexican = Menu.create(name: "Senora Marta's")
deli = Menu.create(name: "Hoagies 'n Grinders")
chinese = Menu.create(name: "Mandarin Buffet")
chocolate = Menu.create(name: "Chocolate Lover's Bakery")
healthy = Menu.create(name: "Green Goddess Cuisine")

# ice_cream = Menu.find_by(id: 1)
# mexican = Menu.find_by(id: 2)
# deli = Menu.find_by(id: 3)
# chinese = Menu.find_by(id: 4)
# chocolate = Menu.find_by(id: 5)
# healthy = Menu.find_by(id: 6)

20.times do
  Item.create(
    name: Faker::Dessert.flavor,
    description: Faker::Adjective.positive,
    price: 3.99,
    menu: ice_cream
  )
end

12.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(9.01..15.99),
    menu: mexican
  )
end

8.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(9.01..12.99),
    menu: deli
  )
end

11.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(5.01..15.99),
    menu: chinese
  )
end

9.times do
  Item.create(
    name: Faker::Dessert.variety,
    description: "Served with #{Faker::Dessert.topping}",
    price: rand(4.90..20.01),
    menu: chocolate
  )
end

7.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(12.01..25.99),
    menu: healthy
  )
end

puts "Done seeding!"

# https://github.com/faker-ruby/faker/blob/master/doc/default/restaurant.md
# https://loremflickr.com/320/240/food,meal
# https://github.com/faker-ruby/faker/blob/master/doc/default/lorem_flickr.md

# https://github.com/faker-ruby/faker/blob/master/doc/default/food.md