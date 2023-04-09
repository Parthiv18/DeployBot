const Discord = require("discord.js");
const nerdamer = require("nerdamer/all.min");
const task = require("../helper/web");

module.exports = async function (msg) {
  //Derive function
  if (msg.content.startsWith("-derive")) {
    var inputText = msg.content.split(" ");
    //test is gone
    var fullName = inputText.slice(1).join(" ");
    //replace brackets
    var output = fullName
      .replace(/\(/g, "%2528")
      .replace(/\)/g, "%2529")
      .replace(/\^/g, "%255E")
      .replace(/\+/g, "%2B")
      .replace(/\//g, "%2F")
      .replace(/\//g, "%2F");
    task.findDerivative(output).then((x) => msg.reply(x));
  }

  //Integration
  if (msg.content.startsWith("-int")) {
    var inputText = msg.content.split(" ");
    //test is gone
    var fullName = inputText.slice(1).join(" ");
    //replace brackets
    var output = fullName
      .replace(/\(/g, "%2528")
      .replace(/\)/g, "%2529")
      .replace(/\^/g, "%255E")
      .replace(/\+/g, "%2B")
      .replace(/\//g, "%2F")
      .replace(/\//g, "%2F");
    task.findIntegration(output).then((x) => msg.reply(x));
  }
};
