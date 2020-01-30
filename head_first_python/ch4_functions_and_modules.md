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
