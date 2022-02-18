const Discord = require("discord.js");
const { TicTacToe } = require("klaymon");
const axios = require("axios");
const anime = require("../helper/pics");
const components = require("../helper/msgHelper");
const click = require("discord-clicking-game");
require("dotenv").config();
const request = require('request');


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

  //Clicking Game
  if (msg.content.startsWith("-click")) {
    const game = new click(
      "🎈", // Emoji to use on correct button
      1000 || "random", // Time in which game starts after the ready message
      1000, // Time in which game auto ends , NOTE time should be in Milleseconds
      {
        win: "{winner} won in {time}", // winning messages
        loose: "Too Slow", // Game end message when no one clicks
        started: "Game Starting Everyone Get Ready", // Game started message
        ready: "Starting Soon First Person To Click WINS!", // Ready message
      }
    );
    game.party(msg);
  }

  //coding game
  if (msg.content.startsWith("-code")) {
    try {
      var input = msg.content.split(" ");
      var language;
      if (input[1] == "c".toLowerCase()) {
        language = "c";
      }
      else if (input[1] == "python".toLowerCase()) {
        language = "python3";
      }

      var newInput = input.slice(1);      
      var finalInput = " " + newInput.slice(1).join(" "); //nothing left

      var code = "";
      for (var i=0; i<finalInput.length;i++) {
        code += finalInput[i];
        if (finalInput[i] == "scanf") {
          msg.reply("PLEASE NO SCANF HERE")
        }
        //console.log(finalInput[i]);
      }
        
      var program = {
        script: code,
        language: language,
        versionIndex: "0",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      };
      request({
        url: 'https://api.jdoodle.com/execute',
        method: "POST",
        json: program
      },
      function (error, response, body) {
          //console.log('error:', error);
          //console.log('statusCode:', response && response.statusCode);
          //console.log('body:', body.output);
          const msgStyle = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setDescription("Output (dont add scanf here/**add space after your coding language**): \n" + body.output);
            msg.reply({ embeds: [msgStyle] });
      });      
    } 
    catch (err) {
      msg.reply("oops wrong input");
    } 
  }


  //fighting game NetworkManagerEmittedEvents
  if (msg.content.startsWith("-fight")) {
    const user = msg.author.username; //person who started fight
    const enemy = msg.mentions.members.first().id; //person who accpeted

    msg.channel.send(
      `<@${enemy}>` + " wanna fight " + user + "?\n `Yes` or `No`"
    );

    const collector = new Discord.MessageCollector(
      msg.channel,
      (m) => m.author.id === enemy,
      { time: 10000 }
    ); // <--- Line edited
    const collector1 = new Discord.MessageCollector(
      msg.channel,
      (m) => m.author.id === user,
      { time: 10000 }
    ); // <--- Line edited

    collector.on("collect", (msg) => {
      if (msg.author.id === enemy && msg.content.toLowerCase() == "yes") {
        msg.channel.send(`<@${enemy}>` + " **Choose: Attack or Defend**");
        const defMoves = ["block", "counter punch", "Elbow strike", "spin kick", "upper cut", "right jab"];
        const offMoves = ["punch", "kick", "360 kick", "Throat punch", "headlock", "uppercut"];        
        var userHealth = 100;
        var enemyHealth = 100; 
        
        //if ememy says attack or defend => collect 
        collector.on("collect", (msg) => {
          if (msg.author.id === enemy && msg.content.toLowerCase() == "attack") {
            var def = Math.floor(Math.random() * defMoves.length);
            var off = Math.floor(Math.random() * offMoves.length); //work on this to randomize
            var damage = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
            userHealth -= damage;             
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("DARK_RED")
                    .addField("Result: ", `<@${enemy}>` + " used: " + offMoves[off] + "\nDamage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              msg.channel.send(user + " **Choose: Battle or Guard**");

              //now user turn to fight back
              collector1.on("collect", (msg) => {
                if (msg.author.username === user && msg.content.toLowerCase() == "battle") {
                  var damage = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
                  enemyHealth -= damage; 
                  //if both are alive
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("DARK_RED")
                        .addField("Result: ", user + " used: " + defMoves[def] + "\nDamage inflicted: " + damage + "\n" + `<@${enemy}>` + " **Health**: " + enemyHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${enemy}>` + " **Choose: Attack or Defend**");
                 
                }
                else if (msg.author.username === user && msg.content.toLowerCase() == "guard") {
                  var damage = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
                  enemyHealth -= damage; 
                  //if both are alive
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("DARK_RED")
                        .addField("Result: ", user + " used: " + defMoves[def] + "\nDamage inflicted: " + damage + "\n" + `<@${enemy}>` + " **Health**: " + enemyHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${enemy}>` + " **Choose: Attack or Defend**");
                }  
              });
          }
          else if (msg.author.id === enemy && msg.content.toLowerCase() == "defend") {
            var def = Math.floor(Math.random() * defMoves.length);
            var off = Math.floor(Math.random() * offMoves.length); //work on this to randomize
            var damage = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
            userHealth -= damage;             
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("DARK_RED")
                    .addField("Result: ", `<@${enemy}>` + " used: " + offMoves[off] + "\nDamage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              msg.channel.send(user + " **Choose: Battle or Guard**");

              //now user turn to fight back
              collector1.on("collect", (msg) => {
                if (msg.author.username === user && msg.content.toLowerCase() == "battle") {
                  var damage = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
                  enemyHealth -= damage; 
                  //if both are alive
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("DARK_RED")
                        .addField("Result: ", user + " used: " + offMoves[off] + "\nDamage inflicted: " + damage + "\n" + `<@${enemy}>` + " **Health**: " + enemyHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${enemy}>` + " **Choose: Attack or Defend**");
                 
                }
                else if (msg.author.username === user && msg.content.toLowerCase() == "guard") {
                  var damage = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
                  enemyHealth -= damage; 
                  //if both are alive
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("DARK_RED")
                        .addField("Result: ", user + " used: " + defMoves[def] + "\nDamage inflicted: " + damage + "\n" + `<@${enemy}>` + " **Health**: " + enemyHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${enemy}>` + " **Choose: Attack or Defend**");
                }  
              });
          }
          if (userHealth <= 0) { //check if user is not alive
            collector.stop();
            collector1.stop();
            const msgStyle = new Discord.MessageEmbed()
                .setColor("DARK_RED")
                .addField(user + " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
            msg.channel.send({ embeds: [msgStyle] });
            //msg.channel.send(user + " **was brutally killed**");              
          }
          else if (enemyHealth <= 0) { //check if enemy is not alive
            collector.stop();
            collector1.stop();
            const msgStyle = new Discord.MessageEmbed()
                .setColor("DARK_RED")
                .addField(`<@${enemy}>` + " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${enemy}>` + " **Health**: " + enemyHealth + "/100", true);
            msg.channel.send({ embeds: [msgStyle] });
            //msg.channel.send(`<@${enemy}>` + " **was brutally killed**")              
          }
        });
      }
    });
  }

  //Other
};
