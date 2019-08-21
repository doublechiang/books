# Get my number game

puts "Welcome to get my number!"
print "What's your name? "
input = gets
name = input.chomp
puts "Welcome, #{name}!"

puts "I've got a random number between 1 and 100"
puts "Can you guess it?"
target = rand(100)+1

num_guesses =0
puts "You've got #{10-num_guesses} guesses left."
