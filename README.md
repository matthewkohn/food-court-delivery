# _Foodcourt Delivery_ <a id="top"></a>

## __Description__
"Foodcourt Delivery" allows the user to create an account and login with an authenticated password.

Once logged in, the user may order food from a wide variety of menus.

_I created this full stack app to demonstrate my proficiency in Rails and React for my Phase 4 project at Flatiron School._

-----

## __Table of Contents__
* [Requirements](#req)
* [Media](#media)
* [Relationships](#rel)
* [JSON](#json)
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

### React Component Flowchart

<img src="./public/media/v1.png" alt="react flowchart">

-----

### DB Diagram of table relationships

<img src="./public/media/db.png" alt="db diagram" width="500">

-------
-------
## Relationships <a id="rel"></a>
##### [Back to Top](#top)
### User
```has_many :orders```

```has_one :cart```

### Menu
```has_many :items```

### Item
```has_many :order_items```

```has_many :cart_items```

```belongs_to :menu```

### Order
```belongs_to :user```

```has_many :order_items```

```has_many :items, through: :order_items```

### OrderItem
```belongs_to :order```

```belongs_to :item```

### Cart
```belongs_to :user```

```has_many :cart_items```

### CartItem
```belongs_to :cart```

```belongs_to :item```

-------
-------
## JSON <a id="json"></a>
##### [Back to Top](#top)
### GET ```/users/get_current_user```
```
{
  "id": 1,
  "username": "Matt"
}
```
-----
### GET ```/menus```
```
  // Menu components
{
  "menus": [
    {
      "id": 1,
      "name": "breakfast"
    },
    {
      "id": 2,
      "name": "chocolate"
    }
    ...
    ...
  ]
}
```
_____
### GET ```/menus/:id```
```
// Item components
{
  "id": 1,
  "menu_name": "breakfast",
  "items": [
    {
      "id": 1,
      "name": "Breakfast Burrito",
      "price": 12,
      "description": "Humongous egg & chorizo burrito with guacamole"
    },
    {
      "id": 2,
      "name": "Pancakes",
      "price": 10,
      "description": "Tall stack of flapjacks with butter and maple syrup"
    }
    ...
    ...
  ]
}
```
------
### GET ```/orders/:user_id```
```
  // Order History
{
  "orders": [
    {
      "id": 1,
      "user_id": 1,
      "created_at": "June 30, 2022",
      "total": 40,
      "item_count": 3,
      "order_items": [
        {
          "item_id": 3,
          "quantity": 1,
          "subtotal": 10,
          "unit_price": 10
        },
        {
          "item_id": 3,
          "quantity": 1,
          "subtotal": 10,
          "unit_price": 10
        }
      ]
    },
    {
      "id": 2,
      "user_id": 2,
      "created_at": "June 17, 2022",
      "total": 36,
      "item_count": 1,
      "order_items": [
        {
          "item_id": 3,
          "quantity": 1,
          "subtotal": 10,
          "unit_price": 10
        }
      ]
    }
    ...
    ...
  ]
}

```

------
## License <a id="license"></a>
[Read the license here](./LICENSE)

##### [Back to Top](#top)