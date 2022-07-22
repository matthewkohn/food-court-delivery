# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "Seeding............."
puts "....."

require 'faker'

User.create(username: "Matt", password: "happy")
User.create(username: "Logan", password: "running")

random1 = Menu.create(name: Faker::Restaurant.name)
random2 = Menu.create(name: Faker::Restaurant.name)
random3 = Menu.create(name: Faker::Restaurant.name)
random4 = Menu.create(name: Faker::Restaurant.name)
random5 = Menu.create(name: Faker::Restaurant.name)
random6 = Menu.create(name: Faker::Restaurant.name)
random7 = Menu.create(name: Faker::Restaurant.name)
random8 = Menu.create(name: Faker::Restaurant.name)
random9 = Menu.create(name: Faker::Restaurant.name)
random10 = Menu.create(name: Faker::Restaurant.name)
random11 = Menu.create(name: Faker::Restaurant.name)
random12 = Menu.create(name: Faker::Restaurant.name)

36.times do
  Item.create(
    name: "#{Faker::Dessert.flavor} ice cream",
    description: Faker::Adjective.positive,
    price: 3.99,
    menu: random1
  )
end

7.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(9.01..15.99),
    menu: random2
  )
end

5.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(9.01..12.99),
    menu: random3
  )
end

6.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(5.01..15.99),
    menu: random4
  )
end

18.times do
  Item.create(
    name: Faker::Dessert.variety,
    description: "Served with #{Faker::Dessert.topping}",
    price: rand(4.90..10.01),
    menu: random5
  )
end

12.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(12.01..25.99),
    menu: random6
  )
end

5.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(22.01..45.99),
    menu: random7
  )
end

12.times do
  Item.create(
    name: Faker::Coffee.blend_name,
    description: Faker::Coffee.notes,
    price: rand(2.01..9.99),
    menu: random8
  )
end

10.times do
  Item.create(
    name: Faker::Food.ingredient,
    description: Faker::Food.description,
    price: rand(1.99..5.99),
    menu: random9
  )
end

5.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(8.01..15.99),
    menu: random10
  )
end

7.times do
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: rand(12.01..25.99),
    menu: random11
  )
end

9.times do
  Item.create(
    name: Faker::Food.sushi,
    description: Faker::Food.description,
    price: rand(12.01..25.99),
    menu: random12
  )
end

puts "Done seeding!"

# https://github.com/faker-ruby/faker/blob/master/doc/default/restaurant.md
# https://loremflickr.com/320/240/food,meal
# https://github.com/faker-ruby/faker/blob/master/doc/default/lorem_flickr.md

# https://github.com/faker-ruby/faker/blob/master/doc/default/food.md