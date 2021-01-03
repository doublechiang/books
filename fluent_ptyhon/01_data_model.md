# Pythonic Card Deck
check example 1_1
execute interactive file with 
exec(open("example1_1.py").read())

>>> deck [0]
Card(rank='2', suit='spades')
>>> deck [-1]
Card(rank='A', suit='hearts')

Pick a random card?

>>> from random import choice
>>> choice(deck)
Card(rank='K', suit='clubs')
>>> choice(deck)
Card(rank='3', suit='diamonds')

Support slicing

>>> deck[:3]
[Card(rank='2', suit='spades'), Card(rank='3', suit='spades'), Card(rank='4', suit='spades')]
>>> deck[12::13]
[Card(rank='A', suit='spades'), Card(rank='A', suit='diamonds'), Card(rank='A', suit='clubs'), Card(rank='A', suit='hearts')]


# Vector

Check ex1_2.py

Produce a new instance, do not change original instance value.

# String represention
__repr__ is used for object inspection. use %r as standard attribute.
__str__ is used by print function for end user inspecting.


