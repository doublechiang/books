json.extract! client_workout, :id, :client_name, :trainer, :duration_mins, :date_of_workut, :paid_amount, :created_at, :updated_at
json.url client_workout_url(client_workout, format: :json)
