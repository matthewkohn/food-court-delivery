# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "Matt", password: "happy", admin: true)
User.create(username: "Logan", password: "running")

ice_cream = Menu.create(name: "99 Flavors Ice Cream Shop")
mexican = Menu.create(name: "Senora Marta's")
deli = Menu.create(name: "Hoagies 'n Grinders")
chinese = Menu.create(name: "Mandarin Buffet")
chocolate = Menu.create(name: "Chocolate Lover's Bakery")
healthy = Menu.create(name: "Green Goddess Cuisine")

puts "Done seeding!"

# https://github.com/faker-ruby/faker/blob/master/doc/default/restaurant.md
# https://loremflickr.com/320/240/food,meal
# https://github.com/faker-ruby/faker/blob/master/doc/default/lorem_flickr.md

# https://github.com/faker-ruby/faker/blob/master/doc/default/food.md