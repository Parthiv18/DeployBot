const Discord = require("discord.js");
const nerdamer = require("nerdamer/all.min");

module.exports = async function (msg) {
  if (msg.content.startsWith("-diff")) {
    var equation = msg.content.split(" ");
    if (equation.length === 2) {
      var e = nerdamer("diff(" + equation[1] + "),x)");

      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Differentiation")
        .addField("Output: ", e.text() , true)
        .setTimestamp();
      msg.channel.send({ embeds: [msgStyle] });
    }
  }
};
