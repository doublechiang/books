Rails.application.routes.draw do
  resources :seats
  resources :flights
  get 'flights/:flight_id/seats' => 'seats#flight_seats'  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
