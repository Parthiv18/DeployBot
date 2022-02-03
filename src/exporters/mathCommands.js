const Discord = require("discord.js");
const nerdamer = require("nerdamer/all.min");

module.exports = async function (msg) {
  if (msg.content.startsWith("-diff")) {
    var equation = msg.content.split(" ");
    if (equation.length === 2) {
      try {
        var e = nerdamer("diff(" + equation[1] + "),x");
        //'diff('+equation[1]+'),x');
        const msgStyle = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Differentiation - Under Progress")
          .addField("Output: ", e.text(), true)
          .setTimestamp();
        msg.channel.send({ embeds: [msgStyle] });
      } catch (err) {
        msg.reply("We Understand There May Be Some Problems!");
      }
    }
  }
};
