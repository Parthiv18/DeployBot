const { Client, Intents } = require("discord.js");

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

require("dotenv").config();
const TOKEN = process.env.TOKEN;

// calling paths
const commandHandler = require("./exporters/commands");
const gameHandler = require("./exporters/games");
const mathHandler = require("./exporters/mathCommands");

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", commandHandler);
bot.on("message", gameHandler);
bot.on("message", mathHandler);
