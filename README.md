# 2020-feb-coachRed

To run the app:
Create a file called `.env` in the ./back directory and store an API secret like this: `SECRET="password123"`

Application is split into front and back folders. 

Each of the two has a gulp watch set up, and each can be started with npm start. 

The DB must be named `CoachRed` and has three collections: `sport`, `athlete`, and `coach`.

The sport collection needs to have Documents matching the following structure:

```
{ name: "Rugby" }
```

These sports will populate the front-end sport drop-downs.

