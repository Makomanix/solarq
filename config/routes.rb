Rails.application.routes.draw do
    # route to test your configuration

    resources :users, only: [ :index, :show, :create, :destroy, :update ]
    # resources :solar_objects, only: [:index, :show]
    resources :questions, only: [ :index ]
    resources :user_questions, only: [ :index, :create ]
    resources :leaderboards, only: [ :index, :create ]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sesssions#destroy"
    get "/solar_objects/:category", to: "solar_objects#getByCategory"
    get "/questions/:quiz", to: "questions#getByCategory"
end
