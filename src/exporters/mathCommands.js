const Discord = require("discord.js");
const nerdamer = require("nerdamer/all.min");
const task = require("../helper/web");

module.exports = async function (msg) {
  //Differentiation
  if (msg.content.startsWith("-diff")) {
    var equation = msg.content.split(" ");
    if (equation.length === 2) {
      try {
        var diffCalc = nerdamer("diff(" + equation[1] + "),x");
        //'diff('+equation[1]+'),x');
        const msgStyle = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Differentiation - Under Progress")
          .addField("Output: ", diffCalc.text(), true)
          .setTimestamp();
        msg.channel.send({ embeds: [msgStyle] });
      } catch (err) {
        msg.reply("We Understand There May Be Some Problems!");
      }
    }
  }

  //Integration
  /*if (msg.content.startsWith("-int")) {
    var equation = msg.content.split(" ");
    if (equation.length === 2) {
      try {
        var intCalc = nerdamer("integrate(" + equation[1] + "),x");
        //'('integrate(10*q/(4*x^2+24*x+20), x)')
        const msgStyle = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Integration - Under Progress")
          .addField("Output: ", intCalc.text(), true)
          .setTimestamp();
        msg.channel.send({ embeds: [msgStyle] });
      } catch (err) {
        msg.reply("Format [-int equation]");
      }
    }
  }*/

  //Integration [new]
  if (msg.content.startsWith("-int")) {
    /*      
      + => %2B (value)

      intput x^2-3
      x%255E2-3&v2=x
      input x^2+3
      x%255E2%2B3
      input x/3
      x%2F3
      input x*3
      x*3
    */
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
      .replace(/\//g, "%2F"); //tan%2528x%2529

    //console.log("works");
    task.getIntegration(output).then((x) => msg.reply(x));
  }

  //Definite Integration
  if (msg.content.startsWith("-defint")) {
    var equation = msg.content.split(" ");
    if (equation.length === 4) {
      try {
        var defintCalc = nerdamer(
          "defint(" + equation[1] + "," + equation[2] + "," + equation[3] + ")"
        );
        //('defint(e^(cos(x)), 1, 2)');
        const msgStyle = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Definite Integration - Under Progress")
          .addField("Output: ", defintCalc.text(), true)
          .setTimestamp();
        msg.channel.send({ embeds: [msgStyle] });
      } catch (err) {
        msg.reply("Format [-defint equation lowerbound upperbound]");
      }
    }
  }
};
