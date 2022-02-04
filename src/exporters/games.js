const Discord = require("discord.js");
const { TicTacToe } = require("klaymon");
const axios = require("axios");
const anime = require("../helper/pics");
const components = require("../helper/msgHelper");

module.exports = async function (msg) {
  //New 8ball
  if (msg.content.startsWith("-8ball")) {
    var num = Math.floor(Math.random() * components.ballReplies.length);
    var ball = msg.content.split(" ");
    if (ball.length > 1) {
      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField("8ball Reply: ", components.ballReplies[num], true);
      msg.channel.send({ embeds: [msgStyle] });
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
          const msgStyle = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("You Got: ")
            .setAuthor({ name: "Anime: Demon Slayer" })
            .setImage(anime.DemonSlayerCharacters[picPicker])
            .setTimestamp();
          msg.channel.send({ embeds: [msgStyle] });
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
          const msgStyle = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("You Got: ")
            .setAuthor({ name: "Anime: Naruto" })
            .setImage(anime.NarutoCharacters[picPicker])
            .setTimestamp();
          msg.channel.send({ embeds: [msgStyle] });
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
          const msgStyle = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("You Got: ")
            .setAuthor({ name: "Anime: Attack on Titan" })
            .setImage(anime.AOTCharacters[picPicker])
            .setTimestamp();
          msg.channel.send({ embeds: [msgStyle] });
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
          const msgStyle = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("You Got: ")
            .setAuthor({ name: "Anime: Akame Ga Kill" })
            .setImage(anime.AkameGaKillCharacters[picPicker])
            .setTimestamp();
          msg.channel.send({ embeds: [msgStyle] });
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
          const msgStyle = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("You Got: ")
            .setAuthor({ name: "Anime: Jujitsu Kaisen" })
            .setImage(anime.JJKCharacters[picPicker])
            .setTimestamp();
          msg.channel.send({ embeds: [msgStyle] });
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

  //Tic Tac Toe
  if (msg.content.startsWith("-ttt")) {
    const opponent = msg.mentions.users.first();
    if (!opponent) return msg.reply(`You must tag a user!`);
    await TicTacToe({
      message: msg, // Message Parameter
      opponent: opponent, // Opponent Parameter
      xColor: "DANGER", // X Buttons color / DEFAULT: DANGER
      oColor: "SUCCESS", // O Buttons color / DEFAULT: SUCCESS
      xEmoji: "❌", // X Emoji // DEFAULT ❌
      oEmoji: "⭕", // O Emoji // DEFAULT ⭕
      embed: {
        color: "BLACK", // Embed color / DEFAULT RANDOM
      },
      fightBot: "YOU CANT FIGHT A BOT!", // If the user tries to fight a bot / DEFAULT: "Awww, You can't fight a bot!"
      fightEmoji: "🥋", // Emoji in the embed / DEFAULT: 🎮
    });
  }
  //Other
};
