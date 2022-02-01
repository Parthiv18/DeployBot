const Discord = require("discord.js");
const bot = new Discord.Client();

require("dotenv").config();
const TOKEN = process.env.TOKEN;

const commandHandler = require("./exporters/commands");
const gameHandler = require("./exporters/games");

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", commandHandler);
bot.on("message", gameHandler);
