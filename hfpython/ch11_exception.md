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
