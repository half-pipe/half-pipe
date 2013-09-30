Todos::Application.routes.draw do
  resources :todos do
    member do
      post :toggle
    end

    collection do
      post :toggle_all
      get :active
      get :completed
      delete :destroy_completed
    end
  end

  root to: "todos#index"
end
