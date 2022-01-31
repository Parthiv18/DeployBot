const Discord = require("discord.js");

module.exports = async function (msg) {
  //8ball
  const rep = [
    "As I see it, yes!",
    "Concentrate and ask again!",
    "It is decidedly so!",
    "Don't count on it!",
    "My sources say no",
  ];
  var num = Math.floor(Math.random() * ((rep.length) - 0 + 1)) + 0;
  if (msg.content.startsWith("-8ball")) {
    msg.reply(rep[num]);
  }

  //1v1
  
};
