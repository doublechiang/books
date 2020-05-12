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