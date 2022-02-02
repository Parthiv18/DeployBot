const Discord = require("discord.js");
const anime = require("../helper/pics");
const components = require("../helper/msgHelper");

module.exports = async function (msg) {
  //New 8ball
  if (msg.content.startsWith("-8ball")) {
    var lengthVal = components.ballReplies.length - 1;
    var num =
      Math.floor(Math.random() * (lengthVal - 1 - 0 + 1)) +
      0;
    var ball = msg.content.split(" ");
    if (ball.length > 1) {
      msg.reply(components.ballReplies[num]);
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
          var picPicker =
            Math.floor(
              Math.random() * (anime.DemonSlayerCharacters.length - 0 + 1)
            ) + 0;
          msg.reply("You Got: ", {
            files: [{ attachment: anime.DemonSlayerCharacters[picPicker] }],
          });
        } catch (err) {
          msg.reply("Going too fast! Retry");
        }
      }
      //Anime [Naruto]
      else if (animeName[1].toUpperCase() === "naruto".toUpperCase()) {
        try {
          var picPicker =
            Math.floor(
              Math.random() * (anime.NarutoCharacters.length - 0 + 1)
            ) + 0;
          msg.reply("You Got: ", {
            files: [{ attachment: anime.NarutoCharacters[picPicker] }],
          });
        } catch (err) {
          msg.reply("Going too fast! Retry");
        }
      }
      //Anime [AOT]
      else if (
        animeName[1].toUpperCase() === "attackontitan".toUpperCase() ||
        animeName[1].toUpperCase() === "aot".toUpperCase()
      ) {
        try {
          var picPicker =
            Math.floor(Math.random() * (anime.AOTCharacters.length - 0 + 1)) +
            0;
          msg.reply("You Got: ", {
            files: [{ attachment: anime.AOTCharacters[picPicker] }],
          });
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
          var picPicker =
            Math.floor(Math.random() * (anime.AkameGaKill.length - 0 + 1)) + 0;
          msg.reply("You Got: ", {
            files: [{ attachment: anime.AkameGaKill[picPicker] }],
          });
        } catch (err) {
          console.log(err);
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
