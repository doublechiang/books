Source code can be downloaded from http://python.itcarlow.ie/ed2

# Four built-in Data Structure

list, tuple, dictionary and set.

## tuple: an ordered immutable collection of objects.

## dictionary: an unordered set of ey/value pairs

## set: an unordered set of unique objects.

## List
Python lets you access the list relative to each end: negative index values count from right to left.
list[-1] is the last object in list.

list support start, stop, step
list[start:stop:step]

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

triple quites around strings are knowns as *docstrings*, to mainly describe function's purpose.

# PEP, Python Enhancement Protocol

PEP 8 is the style guide.
PEP 257 is convention docstring

# use function annotation
def search4vowels(word:str) -> set:
  pass

help(search4vowels) will show the docstring and annotation.

# How are modules found?
* current working directory
* site-package locations
* standard library locations.

# Getting module into site-package
## using setuptools to install into site-packages.

* create a distribution description
    setup.py and README.txt
* generate a distribution file
* install the distribution file.

in the setup.py
from setuptools import setup
setup(
    name='vserach',
    version='1.0',
    py_modules=['vsearch'] <-- the list of .py files are going to be packaged.
    ....
)

## creating distribution file
python3 setup.py sdist

## Install site package using pip.

# call-by-value or call-by-reference
list, dic and set all always passed into function by reference
string, integers and tuples (immutable) are passed by value.

# Check PEP 8
using pytest/pep8
py.test --pep8 vsearch.py

# Decorating a function with URL
Decorators: A function decortor, adjust the behavior of an existing function withoug change the function's code.

@app.route('/') <-- it start with @ symbol.
def hello() -> str:
    return 'hello' 

URL '/' is associated with the function hello()


# Better ope, process, close: with

with open('todos.txt') as tasks:
    ....

# the structure of log data.

mysql> create table log ( id int auto_increment primary key, ts timestamp default current_timestamp, phrase varchar(128) not null, ip varchar(16) not null, browser_setring varchar(256) not null, results varchar(64) not null);
Query OK, 0 rows affected (0.02 sec)

mysql> describe log;

# Managing Context with Mehtods,

any class defined iwth __enter__ and __exit__, you can hook into with
This is the protocol.

__init__ before __init__call

with object :

# Session
 Most webapp development frameworks provide *session* to store user data without using globl variable.

 # functions can be nested.

 # Accepting a list of arguments
 use * to accept an arbitrary list of agruments
 * to expand the *list* to individual arguments

 value=[1,2,3,4,5]
 myfunc(1,2,3,4,5)
 myfunc(*value)

 # Accepting Dictionary Arguments
 use ** to accept arbitrary keyword arguements

 def myfunc2(**kwargs):
    for k,v in kwargs.items():
        print(k,v ,sep='->', end=' ')
    print()

# Accepting Any Number and Type of function arguments
def myfunc3(*args, **kwargs):
  if args:
    for a in args:
        print(a, end=' ')
    print()
  if kwargs:
    for k,v in kwargs.items():
        print(k,v ,sep='->', end=' ')
    print()
    

# catch -all exception handler

try:
    with open("file.txt") as fh:
    file_data = fh.read()
except FileNotFoundError:
    print("file is missing")
except PermissionError:
    print("Not allowed")
except Exception as err:
    print(str(err))

# Create custom Exceptions
Avoid tightly coupled code.

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

