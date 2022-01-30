const Discord = require("discord.js");
const task = require("./stocks");

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    msg.reply("Welcome Person w");
  } else if (msg.content.toUpperCase() === "Gay".toUpperCase()) {
    msg.reply("Yes you are gay");
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
