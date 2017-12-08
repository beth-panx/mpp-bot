## Getting Started

### Structure

`app.js` references the bot and starts a [Restify](http://restify.com/) server. `bot.js` has a simple multi-turn dialog which sends the name and description of the bot, and then asks the user for their name.

### Running the bot

```
node app.js
```

### Configuring the bot

The template uses [dotenv](https://github.com/motdotla/dotenv) for managing application settings.