Rails.application.routes.draw do
 
  resources :cart_items, only: [:index, :create, :update, :destroy]
  resources :orders, only: [:index, :create]
  resources :items, only: [:index]
  resources :menus, only: [:index, :show]

  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  delete "/empty_cart", to: "cart_items#empty_cart"

  post "/menus/:menu_id/items", to: "items#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
