# _Foodcourt Delivery_ <a id="top"></a>

## __Description__
"Foodcourt Delivery" allows the user to create an account and login with an authenticated password.

Once logged in, the user may order food from a wide variety of menus.

_I created this full stack app to demonstrate my proficiency in Rails and React for my Phase 4 project at Flatiron School._

-----

## __Table of Contents__
* [Requirements](#req)
* [Media](#media)
* [ActiveRecord Table Relationships](#rel)
* [License](#license)

## __Requirements__ <a id="req"></a>

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

To run this project locally, fork and clone this repo and make sure you have the above requirements installed. Then run:

```
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

-------
-------
## __Media__ <a id="media"></a>
##### [Back to Top](#top)

### Youtube Video Demo
[Check out the video demo here](https://youtu.be/y9ZBeHlyToM)

<img src="./public/media/PhotoGIF_7_28_2022_5_20_01_PM.gif" alt="Foodcourt Delivery Gif">

-----

### DB Diagram of table relationships

<img src="./public/media/db.png" alt="db diagram" width="500">

-----

### React Component Flowchart

<img src="./public/media/v1.png" alt="react flowchart">

-------
-------
## Relationships <a id="rel"></a>
##### [Back to Top](#top)
### User
```has_many :orders```

```has_one :cart```

### Order
```belongs_to :user```

### Cart
```belongs_to :user```

```has_many :cart_items```

```has_many :items, through: :cart_items```

### CartItem
```belongs_to :cart```

```belongs_to :item```

### Item
```has_many :order_items```

```belongs_to :menu```

### Menu
```has_many :items```


------------
------------
## Routes
```
Prefix        Verb   URI Pattern         Controller#Action
cart_items    GET    /cart_items         cart_items#index
              POST   /cart_items         cart_items#create
cart_item     PATCH  /cart_items/:id     cart_items#update
              PUT    /cart_items/:id     cart_items#update
              DELETE /cart_items/:id     cart_items#destroy
orders        GET    /orders             orders#index
              POST   /orders             orders#create
items         GET    /items              items#index
menus         GET    /menus              menus#index
menu          GET    /menus/:id          menus#show
login         POST   /login              sessions#create
logout        DELETE /logout             sessions#destroy
signup        POST   /signup             users#create
me            GET    /me                 users#show
empty_cart    DELETE /empty_cart         cart_items#empty_cart
              GET    /*path              fallback#index
```

-------
-------

## License <a id="license"></a>
[Read the license here](./LICENSE)

##### [Back to Top](#top)