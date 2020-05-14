# Sample web
https://resources.oreilly.com/examples/9780596515775.git

# Ch1, Get Started

> rais <appname>
> rails genearte scaffold tickets name:string seat_id_seq:string address:text price_paid:decimal email_address:string
> rails db:migrate

## create the talbe by running a migration
migration is a small script.
when you would like to change anything in table, use migration
rails generate migration AddPhoneToTickets phone:string.

rails know Add....To.... is add something to the table.
Add<column>To<Table>

# Ch2, beyond scaffolding.
> rails g model (singular)
> rails g model ad name:string description:text price:decimal seller_id:integer email:string img_url:string

**generate model create the models and the migration file**
> rails g controller ads (plural)

To provide a super template, layout.
<%= stylesheet_link_tag 'default.css' %>
And in the layout file, place
<%= yield %>

# Insert, updating and deleting
Rails can create forms that are associated with model objects.
<%= form_for @ad, :url=>{:action=>'create'} do |f| %>

**define new in controller to initiate a new object**
**when create, use the hashed parameter**
@ad = Ad.new(params[:ad])
new securtiy 
@ad = Ad.new(allowed_params)

**redirect_to tell the controller view view is displayed.**
**Restricting access to a function**
Add filter before function to login.

before_filter :check_logged_in, :only => [:edit, :update, :delete]


  def check_logged_in
    authenticate_or_request_with_http_basic("Ads") do | username, password |
      username == "admin" && password == "password"
    end
  end

  # Database finders
  form_for requrie a model to represent data.
  use form_tag for simple form.

    def find
#    puts params[:search_string]
    @client_workouts = ClientWorkout.where("client_name =? OR trainer=?", params[:search_string], params[:search_string])
  end

# Validating datas.
**validation code goes in the MODEL**

# Making connections.
**Partials--output small part of a page**
Three 3 kinds of ERB, layouts, templates and partials
**Partial files are begin with _(underscore)**
Check coconut __new_seat in flights folder.

Partial do not have variable from model, so we need to pass local variable to partial

<%= render :partial=>"new_seat", :locals=>{:seat=>Seat.new(:flight_id=>@flight.id)} %>

**In the partial, we already know the flight ID, so it's a hidden field.**

<%= f.hidden_field :flight_id %>
So the create local object will have hidden attibute.

To make a connection between flight and seat.
field name is important.
seat.flight_id match flight.id

class Flight < ActiveRecord::Base
  has_many :seats
end

**Use error.add_to_base()** to add the error message.

# Ajax
To include Ajax Libraray
Add
  <%= javascript_include_tag 'prototype' %>







