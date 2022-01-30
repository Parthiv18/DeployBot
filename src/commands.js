const Discord = require("discord.js");
const task = require("./stocks");

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    msg.reply("Welcome Person w");
  } else if (msg.content.toUpperCase() === "Gay".toUpperCase()) {
    msg.reply("Yes you are gay");
  }

  //8ball
  const rep = [
    "As I see it, yes!",
    "Concentrate and ask again!",
    "It is decidedly so!",
    "Don't count on it!",
    "My sources say no",
  ];
  var num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  if (msg.content.startsWith("-8ball")) {
    msg.reply(rep[num]);
  }

  //stocks
  if (msg.content.startsWith("-stocks") || msg.content.startsWith("-stock")) {
    var stockName = msg.content.split(" ");
    if (stockName.length === 2) {
      task.findStocks(stockName[1]).then((x) => msg.reply(x));
    } else {
      msg.reply("Cannot Comprehend");
    }
  }
};
