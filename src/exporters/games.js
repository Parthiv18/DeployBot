const Discord = require("discord.js");
const anime = require("../helper/pics");
const components = require("../helper/msgHelper");

module.exports = async function (msg) {
  //8ball
  var num =
    Math.floor(Math.random() * (components.ballReplies.length - 0 + 1)) + 0;
  if (msg.content.startsWith("-8ball")) {
    msg.reply(components.ballReplies[num]);
  }

  //Who am I Game - Anime
  if (msg.content.startsWith("-anime") || msg.content.startsWith("-Anime")) {
    var animeName = msg.content.split(" ");
    if (animeName.length === 2) {
      //Anime [Demon Slayer]
      if (animeName[1].toUpperCase() === "DemonSlayer".toUpperCase()) {
        var picPicker =
          Math.floor(
            Math.random() * (anime.DemonSlayerCharacters.length - 0 + 1)
          ) + 0;
        msg.reply("You Got: ", {
          files: [anime.DemonSlayerCharacters[picPicker]],
        });
      }
      //Anime [Naruto]
      else if (animeName[1].toUpperCase() === "naruto".toUpperCase()) {
        var picPicker =
          Math.floor(Math.random() * (anime.NarutoCharacters.length - 0 + 1)) +
          0;
        msg.reply("You Got: ", {
          files: [anime.NarutoCharacters[picPicker]],
        });
      }
      //Anime [AOT]
      else if (
        animeName[1].toUpperCase() === "attackontitan".toUpperCase() ||
        animeName[1].toUpperCase() === "aot".toUpperCase()
      ) {
        var picPicker =
          Math.floor(Math.random() * (anime.AOTCharacters.length - 0 + 1)) + 0;
        msg.reply("You Got: ", {
          files: [anime.AOTCharacters[picPicker]],
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
};
