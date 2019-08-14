require 'drb/drb'

my_object = []
DRb.start_service("druby://localhost:8787", my_object)
20.times do
	p my_object
	sleep 10
end
DRb.thread.join
