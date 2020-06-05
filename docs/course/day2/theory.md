# Python Foundations

## Using the Python Intepreter

```sh
$ python
Python 3.7.3 (default, Sep  5 2019, 17:14:41)
[Clang 11.0.0 (clang-1100.0.33.8)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

## Python Scripting

I have a file called `whatup.py`:

```python
# whatup.py

print("What's updog?")
print("Not much, what's up with you?")
```

I can run it using the python command in bash:

```sh
$ python whatup.py
```

<br />

## Discussion

1. What is the Standard Library?
2. What are built-in functions?
3. Comments
4. Everything starts at 0
5. pip
6. variables
7. `type(42)`
8. What is a parameter, an what is an argument

<br />

## Functions

```python
# a function without arguments
def generic_hello():
    print("Oh hey hi there bud!")

generic_hello()

# a function with arguments
def greetings(name):
    message = "Hello, " + name
    print(message)

greetings("Laurent")
```

Functions either return nothing (these are called void functions) or return something (these are called fruitfull functions).

Generally when people say parameter/argument they mean the same thing, but the main difference between them is that the parameter is what is declared in the function, while an argument is what is passed through when calling the function.
