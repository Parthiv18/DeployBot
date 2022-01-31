const Discord = require("discord.js");
const task = require("./web");

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    //msg.react("😄");
    msg.channel.send("Welcome", {
      tts: true,
    });
  } else if (msg.content.toUpperCase() === "Gay".toUpperCase()) {
    msg.reply("Yes you are gay");
  }

  //delete messages
  /*if (msg.content.includes("YAY")) {
    let input = msg.content.split(" ").slice(1).join(" "); // Removes the prefix
    msg.delete(); // Deletes the message
    //msg.channel.send(input); //.then(msg=>msg.delete({timeout:"5000"}) <- if you want delete it with delay and sends the finished text
  }*/

  //stocks
  if (msg.content.startsWith("-stocks") || msg.content.startsWith("-stock")) {
    var stockName = msg.content.split(" ");
    if (stockName.length === 2) {
      task.findStocks(stockName[1]).then((x) => msg.reply(x));
    } else {
      msg.reply("Cannot Comprehend");
    }
  }

  //Crypto
  if (msg.content.startsWith("-crypto") || msg.content.startsWith("-Crypto")) {
    var cryptoName = msg.content.split(" ");
    if (cryptoName.length === 2) {
      task.findCrypto(cryptoName[1]).then((x) => msg.reply(x));
    } else {
      msg.reply("Cannot Comprehend");
    }
  }

  //IG
  if (msg.content.startsWith("-ig")) {
    var igName = msg.content.split(" ");
    if (igName.length === 2) {
      task.findIG(igName[1]).then((x) => msg.reply(x));
    } else {
      msg.reply("Cannot Find Such User");
    }
  }
};
