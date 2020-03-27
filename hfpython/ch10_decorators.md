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
    