# Day 2 Source Code

## Part 1: Data Types

```python
# 2.1.1: data types: strings
message = "Hello, Laurent"
type(message)
print(message)



# 2.1.2: data types: int
age = 33
type(age)



# 2.1.3: data types: float
price_of_pizza = 20.91
type(price_of_pizza)



# 2.1.4: data types: bool
male = True
type(male)
```

<br />

## Part 2: Functions

```python
# 2.2.1 functions with no parameters
def greetings():
    message = "Hello, there"
    print(message)

greetings()



# 2.2.2 functions with parameters
def greetings(name):
    message = "Hello, " + name + "!"
    print(message)

greetings("Laurent")



### 2.2.3 functions with default parameters
def shout_game_stats(playername, score=100):
    print(playername)
    print(score)

shout_game_stats("Jonathan", 7)
shout_game_stats("Laurent")
```

<br />

## Part 3: if/else conditional statements

```python
### 2.3.1 simple if/else statement
name = "Laurent"

if (name == "Laurent"):
    print("Wow what a nice name.")
else:
    print("Well that's ok too.")



# 2.3.2 if/elif/else statement
age = 33
in_school = True

if (age < 12 and in_school == True):
    print("Stay in school kid")
elif (age > 30 and in_school == True):
    print("Time to get a job bud")
else:
    print("Ok you're cool.")
```

<br />

## Part 4: Void and Fruitful Functions

```python
### 2.5.1 void function

def hello(name, age):
    age_in_days = age * 365
    print("hello and goodbye")

hello("Laurent", 105)
x = hello("Laurent", 105)
print("the value returned by the function hello() is", x)
print("the type of the value returned is:", type(x))



# 2.5.2 fruitful functions

def age_in_days(age):
    days_old = age * 365
    days_plus_100 = days_old + 100
    return days_old

age_in_days(100) # nothing happens
y = age_in_days(33) # the returned value is stored in y
print(y)
print(type(y)) # int
```

<br />

## Part 5: Loops

```python
# 2.6.1: range loop

for i in range(7):
    print(f"Happy {i} Birthday!")

age = 9
for i in range(age):
    print(f"Happy {i} Birthday!")



# 2.6.2: while loop

def cool_loop():
    j = 0
    while (j < 8):
        print("what's up")
        j = j + 1

cool_loop()
```