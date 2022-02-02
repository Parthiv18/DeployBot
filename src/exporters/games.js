const Discord = require("discord.js");
const anime = require("../helper/pics");
const components = require("../helper/msgHelper");

module.exports = async function (msg) {
  //New 8ball
  if (msg.content.startsWith("-8ball")) {
    var num = Math.floor(Math.random() * components.ballReplies.length);
    var ball = msg.content.split(" ");
    if (ball.length > 1) {
      const msgStyle = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(msg.author.tag, msg.author.avatarURL)
        .addField(components.ballReplies[num]);
      msg.reply(msgStyle);
    } else if (ball.length <= 1) {
      msg.reply("Yes or no question");
    }
  }

  //Who am I - Anime
  if (msg.content.startsWith("-anime") || msg.content.startsWith("-Anime")) {
    var animeName = msg.content.split(" ");
    if (animeName.length === 2) {
      //Anime [Demon Slayer]
      if (animeName[1].toUpperCase() === "DemonSlayer".toUpperCase()) {
        try {
          var picPicker = Math.floor(
            Math.random() * anime.DemonSlayerCharacters.length
          );
          const msgStyle = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setDescription("Anime: Demon Slayer\nYou Got:")
            .setImage(anime.DemonSlayerCharacters[picPicker]);
          msg.channel.send(msgStyle);
        } catch (err) {
          msg.reply("Going too fast! Retry");
        }
      }
      //Anime [Naruto]
      else if (animeName[1].toUpperCase() === "naruto".toUpperCase()) {
        try {
          var picPicker = Math.floor(
            Math.random() * anime.NarutoCharacters.length
          );
          const msgStyle = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setDescription("Anime: Naruto\nYou Got:")
            .setImage(anime.NarutoCharacters[picPicker]);
          msg.channel.send(msgStyle);
        } catch (err) {
          msg.reply("Going too fast! Retry");
        }
      }
      //Anime [Attack on Titan]
      else if (
        animeName[1].toUpperCase() === "attackontitan".toUpperCase() ||
        animeName[1].toUpperCase() === "aot".toUpperCase()
      ) {
        try {
          var picPicker = Math.floor(
            Math.random() * anime.AOTCharacters.length
          );
          const msgStyle = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setDescription("Anime: Attack on Titan\nYou Got:")
            .setImage(anime.AOTCharacters[picPicker]);
          msg.channel.send(msgStyle);
        } catch (err) {
          msg.reply("Going too fast! Retry");
        }
      }
      //Anime [Akame Ga Kill]
      else if (
        animeName[1].toUpperCase() === "akame".toUpperCase() ||
        animeName[1].toUpperCase() === "akamegakill".toUpperCase()
      ) {
        try {
          var picPicker = Math.floor(
            Math.random() * (anime.AkameGaKillCharacters.length + 1)
          );
          const msgStyle = new Discord.RichEmbed() //testing new
            .setColor("RANDOM")
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setDescription("Anime: Akame Ga Kill\nYou Got:")
            .setImage(anime.AkameGaKillCharacters[picPicker]);
          msg.channel.send(msgStyle);
        } catch (err) {
          console.log(err);
          msg.reply("Going too fast! Retry");
        }
      }
      //Anime [JJK]
      else if (
        animeName[1].toUpperCase() === "jjk".toUpperCase() ||
        animeName[1].toUpperCase() === "jujitsukaisen".toUpperCase()
      ) {
        try {
          var picPicker = Math.floor(
            Math.random() * (anime.JJKCharacters.length + 1)
          );
          const msgStyle = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(msg.author.tag, msg.author.avatarURL)
            .setDescription("Anime: Jujitsu Kaisen\nYou Got:")
            .setImage(anime.JJKCharacters[picPicker]);
          msg.channel.send(msgStyle);
        } catch (err) {
          msg.reply("Going too fast! Retry");
        }
      }
      //no anime
      else {
        msg.reply(
          "Cannot Comprehend Anime! [Try without spaces], [Adding that anime soon!]"
        );
      }
    } else {
      msg.reply(
        "Cannot Comprehend Anime! [Try without spaces], [Adding that anime soon!]"
      );
    }
  }

  //Other
};
