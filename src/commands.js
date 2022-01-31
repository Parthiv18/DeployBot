const Discord = require("discord.js");
const task = require("./web");
const anime = require("./pictures/pics");

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    msg.reply("Welcome Person w");
  } else if (msg.content.toUpperCase() === "Gay".toUpperCase()) {
    msg.reply("Yes you are gay");
  }

  //Who am I - DemonSlayer
  if (msg.content.startsWith("-anime") || msg.content.startsWith("-Anime")) {
    var animeName = msg.content.split(" ");
    if (animeName.length === 2) {
      //Demon Slayer as anime
      if (animeName[1].toUpperCase() === "DemonSlayer".toUpperCase()) {
        var picPicker = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        msg.channel.send("You Got: ", {
          files: [anime.DemonSlayerCharacters[picPicker]],
        });
      }
      //no anime
      else {
        msg.reply("Cannot Comprehend Anime");
      }
    } else {
      msg.reply("Cannot Comprehend Anime");
    }
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

  //Crypto

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
