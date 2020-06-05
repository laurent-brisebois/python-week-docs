# Day 3 Source Code

## Part 1: User Input

```python
# 3.1.1: simple user input
name = input("Please enter your name: ")
print("Hello,", name, "!")



# 3.1.2: more complex manipulations of user input
ice_creams = input("How many ice cream cones can you eat in one sitting? ")

# if the ice_creams variable is a positive integer, follow through
if ice_creams.isdigit() == True:

    ice_creams_integer = int(ice_creams)
    if ice_creams_integer > 7:
        print("Good by me.")
    elif (ice_creams_integer > 0 and ice_creams_integer <= 7):
        print("You need to work on that")
    else:
        print("Get out of my class.")

else:
    ice_creams = input(
        "Dude you didn't provide a valid number. I'm asking... how many ice cream cones can you eat in one sitting? ")
```

<br />

## Part 2: Command Line Arguments

```python
# 3.2.1: simple version
import sys

arg1 = sys.argv[0]
arg2 = sys.argv[1]

print("argument 1: ", arg1)
print("argument 2: ", arg2)



# 3.2.2: More complex version
import sys

arg1 = sys.argv[0]
arg2 = ""

if len(sys.argv) == 1:
    pass
else:
    arg2 = sys.argv[1]


if arg2 == "--shout":
    print("HELLO THERE!")
else:
    print("Hello, there")
```

<br />

## Part 3: Imports

```python
# 3.3.1: simple import from module in same directory
import module_greetings

module_greetings.bonjour("Laurent")



# 3.3.2: import from file in subdirectory
import tinymod.voice

tinymod.voice.scream("what's up dog?")



# 3.3.4: import function directly into namespace
from tinymod.voice import scream

scream("I want ice cream")
```

<br />

## Part 4: Mini Server

```python
# 3.4.1: using python as a server
$ python -m http.server --directory ./website/ --bind 127.0.0.1
```

<br />

## Part 5: Working with Files

```python
# 3.5.1: writing to a file on disk
filename = "myfile.txt"

# Open the file with append permission
myfile = open(filename, 'a')

# Write to the file
log = "this app is rather simple"
myfile.write(log)

# Close the file
myfile.close()
```

<br />

## Part 6: Complex Data Types

```python
# 3.6.1: lists
my_favourite_movies = ["Toy Story 1", "Toy Story 2", "Toy Story 3", "Toy Story 4"]
# we act on lists using methods like count, append, pop, sort
# lists can contain multiple data types
# lists can be nested inside other lists
print(my_favourite_movies[0])



# 3.6.2: dictionaries
python_students_num_kids = {"Jonathan": 0, "Firouz": 2, "Ewin": 3}
favourite_movies_dict = {"me": ["Toy Story", "Wall-E"], "my_wife": ["Jason the Terminator", "The Shining"]}
print(favourite_movies_dict["me"])
```