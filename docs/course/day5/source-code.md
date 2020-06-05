# Day 5 Source Code

## Chuck Norris API
### Libraries abstract away complexity
We often find libraries for common APIs, or we write our own small libraries.

```python
# chucklib.py
# this is going to be our "library" for the Chuck Norris API

import requests

def random_joke():
    url = "https://api.chucknorris.io/jokes/random"
    response = requests.request("GET", url)
    parsed_response = response.json()
    return parsed_response["value"]
```

### Joke script
We can now use the API in a script, without dealing with the complexity. This keeps our code readable and flexible.

```python
# jokescript.py

import chucklib

goodjoke = chucklib.random_joke()
print(goodjoke)
```

<br />

## Google Text-To-Voice

```python
# speak.py

import os
from gtts import gTTS
# https://gtts.readthedocs.io/en/latest/index.html

message = gTTS("I am your father")
message.save("luke.mp3")
os.system('afplay luke.mp3')
```

<br />

## Twilio

```python
# send.py

import os
from twilio.rest import Client

# setTwilioEnvVariables
account_sid = os.environ['TWILIOACCOUNTSID']
auth_token = os.environ['TWILIOAUTHTOKEN']

client = Client(account_sid, auth_token)

message = client.messages.create(
                              body="Luke, I am your father",
                              from_='+12055709445',
                              to='+18888888888'
                          )
```

<br />

## Open Weather

```python
# Open Weather API
# A free API to retrieve weather data on anywhere in the world.   
# [Check out their website](https://openweathermap.org/)

## Weather Conditions Codes
#### [Link Here](https://openweathermap.org/weather-conditions)  
            
# Group 2xx: Thunderstorm
# ID      Main            Description
# 200 	Thunderstorm 	thunderstorm with light rain
# 201 	Thunderstorm 	thunderstorm with rain
# 202 	Thunderstorm 	thunderstorm with heavy rain
# 210 	Thunderstorm 	light thunderstorm
# 211 	Thunderstorm 	thunderstorm
# 212 	Thunderstorm 	heavy thunderstorm
# 221 	Thunderstorm 	ragged thunderstorm
# 230 	Thunderstorm 	thunderstorm with light drizzle
# 231 	Thunderstorm 	thunderstorm with drizzle
# 232 	Thunderstorm 	thunderstorm with heavy drizzle

# Group 5xx: Rain
# ID 	 Main 	Description
# 500 	Rain 	light rain
# 501 	Rain 	moderate rain
# 502 	Rain 	heavy intensity rain
# 503 	Rain 	very heavy rain
# 504 	Rain 	extreme rain
# 511 	Rain 	freezing rain
# 520 	Rain 	light intensity shower rain
# 521 	Rain 	shower rain
# 522 	Rain 	heavy intensity shower rain
# 531 	Rain 	ragged shower rain


## Imports

import requests

## Main App Logic

### The request class returns an object with the content of the response from the server

url = "https://api.openweathermap.org/data/2.5/onecall?lat=45.42&lon=-75.69&exclude=minutely&appid=e6b45bbe9e880c661f1efce980849946"

response = requests.request("GET", url)

print(response)

type(response)

### Not quite what I was looking for. The `json()` method will parse the server response and create a python dictionary

clean_response = response.json()

print(clean_response)

### Now that I have a dictionary, I can navigate through it to find what I'm looking for.

clean_response["daily"]

len(clean_response["daily"])

clean_response["daily"][0]

clean_response["daily"][0]["weather"]

clean_response["daily"][0]["weather"][0]

clean_response["daily"][0]["weather"][0]["id"]

### Some testing

list_length = len(clean_response["daily"])

for i in range(list_length):
    print(clean_response["daily"][i]["weather"][0]["id"])


### Expected thunderstorms

for i in range(len(clean_response["daily"])):
    
    if (199 < clean_response["daily"][i]["weather"][0]["id"] < 240) :
        print(f"Thunderstorms are expected in {i} days")
    
    else:
        print(f"Day {i} clear")


### Expected rain

for i in range(len(clean_response["daily"])):
    
    if (499 < clean_response["daily"][i]["weather"][0]["id"] < 540) :
        print(f"Rain is expected in {i} days")
    
    else:
        print(f"Day {i} clear")

### Using counters

rain = 0

for i in range(48):  
    if (499 < clean_response["hourly"][i]["weather"][0]["id"] < 540):
        print(f"Rain is expected in {i} hours")
        rain = rain + 1

        
if rain == 0:
    print("All clear for the next 48 hours")
else:
    print(f"\nTOTAL: {rain} hours of rain over the next 48 hours")

### What else could I add to this to make it cooler?

import time

print("hello")
time.sleep(10)
print("Good bye")

age = 2
while (age < 18):
    print("Moana")
    age = age + 1
    print(age)
```