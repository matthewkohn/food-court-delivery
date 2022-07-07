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

### Menu
```has_many :items```

### Item
```belongs_to :order```

```belongs_to :menu```

### Order
```has_many :items```

```has_many :menus, through: :items```

```belongs_to :user```

-------
-------
## JSON <a id="json"></a>
##### [Back to Top](#top)
### GET ```/users/get_current_user```
```
{
  "id": 1,
  "username": "Matt",
  "admin": true,
  "delivery_address": ""
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
      "description": "Humongous egg & chorizo burrito with guacamole",
      "thumbnail": "www.coolpicture.com"
    },
    {
      "id": 2,
      "name": "Pancakes",
      "price": 10,
      "description": "Tall stack of flapjacks with butter and maple syrup",
      "thumbnail": "www.coolpicture2.com"
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
      "created_at": "June 30, 2022",
      "total": 40,
      "item_count": 3,
      "menus": [
        {
          "id": 3,
          "name": "Some menu 1",
          "items": [
            {
              "id": 1,
              "name": "Dish1",
              "price": 12
            },
            {
              "id": 4,
              "name": "Dish2",
              "price": 17
            }
          ]
        },
        {
          "id": 4,
          "name": "Some menu 2",
          "items": [
            {
              "id": 2,
              "name": "Dish1",
              "price": 11
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "user_id": 2,
      "created_at": "June 17, 2022",
      "total": 36,
      "item_count": 1,
      "menus": [
        {
          "id": 1,
          "name": "Some menu 4",
          "items": [
            {
              "id": 2,
              "name": "Dish4",
              "price": 36
            }
          ]
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