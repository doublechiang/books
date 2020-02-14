# converting pattern into comprehension

Pattern

destinations = []
for dest in flights.values():
    destinations.append(dest.title())

more_dests =[]

more_dests = [ for dest in flights.values()]
Iterate through each of the destinations.

more_dests = [ dest.title() for dest in flights.values()]


# comprehension for Dictionary
more_flights = {conver2ampm(k): v.title() for k, v in flights.items()}


# comprehensios with filters

This is one line

just_freeport2 = {conver2ampm(k): v.title() for k, v in flights.items() if v == 'FREEPORT' }

just_freeport2 = {conver2ampm(k): v.title() 
                for k, v in flights.items() 
                if v == 'FREEPORT' }

# tuple comprehensions?
a generator,same result to list comprehension

for i in (x*3 for x in [1,2,3,4,5]):
    print(i)
