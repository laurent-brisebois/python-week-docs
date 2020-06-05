# Python

## If/Else Conditional Statements

```python
if variable == True:
    # execute code block associated with variable == True
    print("The variable was True")
elif variable == False:
    # execute code block associated with variable == False
    print("The variable was False")
else:
    # execute code block fallback
    print("I have no idea")
```

## Grab User Input

```python
name = input("Please enter your name: ")
print("Hello,", name, "!")
```

## Defining Functions

```python
def greetings(name):
    message = "Hello, " + name + "!"
    print(message)

greetings("Laurent")
```
