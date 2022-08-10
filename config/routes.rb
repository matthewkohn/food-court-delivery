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

  post "/menus/:id/items", to: "items#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
