# Day 2 Exercises

<br />

1. Create a function that uses the year of birth of the user as an argument and prints their age to the console. Test it on a few years.

2. Upgrade the previous script to ask the user for their year of birth as input when the script is run, and print their age to the console.

3. Create a function with an if/else conditional statement. Try nesting another if/else inside of the first "if" branch.

4. Recreate the previous function without the nested conditional, and using multiple condition on the first `if`. Use `elif` statements thereafter to funnel the user in the right branch.

5. Create a game of head or tails where the user is asked to choose between heads or tails, and the scripts randomly generates either a 1 or a 0 and tells the player if they have won or lost. (for this you'll need the `random` library... see example). Your function should make use of booleans to test whether the user has won or not.

## Starting points

```python
# exercise 1
def calculate_age(year_of_birth):
    # your code here

# calculate_age(1986) -> should print 34 to the console



# exercise 2
# in your bash shell: python how_old.py -> should ask the user for the year they were born in, and print their age



# exercise 3
def my_function()
    if (...):
        # do something
    else (...):
        # do something else



# exercise 4
def my_big_function()
    if (... and ... and ... or ...):
        # do something
    
    elif (... or ...):
        # do something else
    
    else:
        # do something else



# exercise 5
import random

user_choice = input("Choose heads or tails")

def coin_flip():
    cointoss = random.randing(0, 1)
    # more code here

# more code here
print()

# running python heads_or_tails.py in bash should ask you to choose between heads or tails and print whether you've won or not
```