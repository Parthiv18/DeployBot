const Discord = require("discord.js");

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    msg.reply("Welcome Human");
  }

  //8ball
  const rep = [
    "As I see it, yes!",
    "Concentrate and ask again!",
    "It is decidedly so!",
    "Don't count on it!",
    "My sources say no",
  ];
  var num = Math.floor(Math.random() * 6);
  if (msg.content.startsWith("-8ball")) {
    msg.reply(rep[num]);
  }
};
