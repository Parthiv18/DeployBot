const Discord = require("discord.js");
const { TicTacToe } = require("klaymon");
const axios = require("axios");
const anime = require("../helper/pics");
const components = require("../helper/msgHelper");
const click = require("discord-clicking-game");

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

  //Fighting game
  /*if (msg.content.startsWith("-fight")) {
    const user = msg.author.username;
    const person = msg.mentions.members.first().id;

    //accpet or deny msg
    msg.channel.send(`<@${person}>` + " wanna fight?\n `Yes` or `No`");

    //collect msg  => check if they replied
    const collector = new Discord.MessageCollector(
      msg.channel,
      (m) => m.author.id === person,
      { time: 10000 }
    ); // <--- Line edited

    collector.on("collect", (msg) => {
      if (msg.author.id === person && msg.content.toLowerCase() == "yes") {
        msg.channel.send(`<@${person}>` + " **Choose: Attack or Defend**");

        const defMoves = ["block", "counter punch", "Elbow strike"];
        const offMoves = ["punch", "kick", "360 kick", "Throat punch", "headlock", "uppercut"];
        var def = Math.floor(Math.random() * defMoves.length);
        var off = Math.floor(Math.random() * offMoves.length);        
        var userHealth = 100;
        var personHealth = 100;

        collector.on("collect", (msg) => {
          if (msg.author.id === person && msg.content.toLowerCase() == "attack") {
            var damage = Math.floor(Math.random() * 100) + 1;
            userHealth -= damage;
            if (userHealth <= 0) {
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .addField(user+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              //msg.channel.send(user + " **LOST**");
            }
            else if (personHealth <= 0) {
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .addField(`<@${person}>`+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              //msg.channel.send(`<@${person}>` + " **LOST**");
            } 
            else {
              //userHealth -= damage;
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .addField("Result: ", `<@${person}>` + " used: " + offMoves[off] + "\nDamage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              msg.channel.send(user + " **Choose: Battle or Guard**");              
            }            
            collector.on("collect", (msg) => {
              if (msg.author.username === user && msg.content.toLowerCase() == "battle") {
                var damage = Math.floor(Math.random() * 100) + 1;
                personHealth -= damage;
                
                if (userHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(user+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(user + " **LOST**");
                }
                else if (personHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(`<@${person}>`+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(`<@${person}>` + " **LOST**");
                } 
                else {
                  const msgStyle = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .addField("Result: ", user + " used: " + offMoves[off] + "\nDamage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${person}>` + " **Choose: Attack or Defend**");                 
                }                
              }
              else if (msg.author.username === user && msg.content.toLowerCase() == "guard") {
                var damage = Math.floor(Math.random() * 100) + 1;
                personHealth -= damage;
                
                if (userHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(user+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(user + " **LOST**");
                }
                else if (personHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(`<@${person}>`+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(`<@${person}>` + " **LOST**");
                }  
                else {
                  const msgStyle = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .addField("Result: ", user + " used: " + defMoves[def] + "\nDamage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${person}>` + " **Choose: Attack or Defend**");                  
                }                
              }               
            });            
          }
          else if (msg.author.id === person && msg.content.toLowerCase() == "defend") {
            var damage = Math.floor(Math.random() * 100) + 1;
            userHealth -= damage;
            if (userHealth <= 0) {
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .addField(user+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              //msg.channel.send(user + " **LOST**");
            }
            else if (personHealth <= 0) {
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .addField(`<@${person}>`+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              //msg.channel.send(`<@${person}>` + " **LOST**");
            }  
            else {
              //userHealth -= damage;
              const msgStyle = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .addField("Result: ", `<@${person}>` + " used: " + defMoves[def] + "\nDamage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
              msg.reply({ embeds: [msgStyle] });
              msg.channel.send(user + " **Choose: Battle or Guard**");              
            }            
            collector.on("collect", (msg) => {
              if (msg.author.username === user && msg.content.toLowerCase() == "battle") {
                var damage = Math.floor(Math.random() * 100) + 1;
                personHealth -= damage;
                
                if (userHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(user+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(user + " **LOST**");
                }
                else if (personHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(`<@${person}>`+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(`<@${person}>` + " **LOST**");
                } 
                else {
                  const msgStyle = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .addField("Result: ", user + " used: " + offMoves[off] + "\nDamage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${person}>` + " **Choose: Attack or Defend**");                                    
                }                                
              }
              else if (msg.author.username === user && msg.content.toLowerCase() == "guard") {
                var damage = Math.floor(Math.random() * 100) + 1;
                personHealth -= damage;

                if (userHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(user+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + user + " **Health**: " + userHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(user + " **LOST**");
                }
                else if (personHealth <= 0) {
                  const msgStyle = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .addField(`<@${person}>`+ " **WAS KILLED**", "Damage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  //msg.channel.send(`<@${person}>` + " **LOST**");
                } 
                else {
                  const msgStyle = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .addField("Result: ", user + " used: " + defMoves[def] + "\nDamage inflicted: " + damage + "\n" + `<@${person}>` + " **Health**: " + personHealth + "/100", true);
                  msg.reply({ embeds: [msgStyle] });
                  msg.channel.send(`<@${person}>` + " **Choose: Attack or Defend**");                  
                }                
              }                        
            });          
          }                                                
        });
      }
      else if (msg.author.id === person && msg.content.toLowerCase() == "no") {
          msg.channel.send(`<@${person}>` + " backed out L");
      }
    });*/

    //Other
  }
};
