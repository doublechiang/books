# Dictionary

# value lookup with square brackets []

# iterating over key
# key must be initialized.

if 'bananas' in fruits:
  fruits['bananas'] +=1
else:
  fruits['bananas'] =1

## often to use, change to 
if 'bananas' not in fruits:
  fruits['bananas'] = 0
fruits['bananas'] += 1

## Above is often to use too.
fruits.setdefault('bananas', 0)
fruits['bananas'] +=1

# Sets, don't allow duplicates
set are in curley brackets {} without commans :

## union() method combine 2 sets
## difference() method tells you what's not shared.
## intersection() report on commonality

# tuples
A single item is the string.
t=('Python')
>>>type(t)
<class 'str'> 

It's quite common to use tuple to accept their argument as input and return.

# Combining the built-in data structure

## pretty-printing the complex data structure
import  pprint
pprint.pprint(people)
