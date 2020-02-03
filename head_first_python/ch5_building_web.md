# Decorating a function with URL
Decorators: A function decortor, adjust the behavior of an existing function withoug change the function's code.

@app.route('/') <-- it start with @ symbol.
def hello() -> str:
    return 'hello' 

URL '/' is associated with the function hello()