const Discord = require("discord.js");
const task = require("../helper/web");
const components = require("../helper/msgHelper");
const wait = require("util").promisify(setTimeout);

module.exports = async function (msg) {
  if (msg.content.toUpperCase() === "Hello DeployBot".toUpperCase()) {
    //msg.react("😄");
    msg.channel.send("Welcome to Server", {
      tts: true,
    });
  } else if (msg.content.toUpperCase() === "Gay".toUpperCase()) {
    msg.reply("Yes you're gay");
  }

  //help
  if (msg.content.toUpperCase() === "-help".toUpperCase()) {
    msg.channel.send(components.helpMsg);
  }

  //kick

  //delete messages
  /*var blackList = ["YAY", "yay", "yAy", "YaY", "yAY", "Yay", "YAy"];
  for (var i = 0; i < blackList.length; i++) {
    if (msg.content.includes(blackList[i])) {
      let input = msg.content.split(" ").slice(1).join(" "); // Removes the prefix
      msg.delete(); // Deletes the message
      //msg.channel.send("Stop Saying: " + input); //.then(msg=>msg.delete({timeout:"5000"}) <- if you want delete it with delay and sends the finished text
    }
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

  //Anime Wallpaper
  if (msg.content.startsWith("-wall")) {
    var animeCharName = msg.content.split(" ");
    var fullName = animeCharName.slice(1).join("+");

    task.animeBackground(fullName).then((x) => msg.reply(x));
  }

  //sending reply
  if (!msg.author.bot) {
    let lastMessages = await msg.channel.messages.fetch({ limit: 1 });
    let previousMessage = lastMessages.last();
    for (var i = 0; i < 1; i++) {
      await wait(10000);
    }
    let lastMessages1 = await msg.channel.messages.fetch({ limit: 1 });
    let previousMessage1 = lastMessages1.last();
    if (previousMessage == previousMessage1) {
      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("bro got left on seen LOL")
        .setAuthor({ name: "" })
        .setImage("https://i.ytimg.com/vi/hS9qEg42Y0g/mqdefault.jpg")
        .setTimestamp();
      msg.channel.send({ embeds: [msgStyle] });
    }
  }
};
