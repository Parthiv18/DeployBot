const Discord = require("discord.js");
const puppeteer = require("puppeteer");

module.exports = {
  //Stocks
  findStocks: async function (name, msg) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    try {
      const page = await browser.newPage();
      await page.goto("https://www.tradingview.com/symbols/" + name + "/", {
        timeout: 0,
        waitUntil: "networkidle0",
      });

      const [getStockName] = await page.$x(
        "/html/body/div[2]/div[4]/div[3]/header/div/div[2]/div[1]/div[1]/h1"
      );
      const [getStockValue] = await page.$x(
        "/html/body/div[2]/div[4]/div[3]/header/div/div[3]/div[1]/div/div/div/div[1]/div[1]"
      );
      const [getStockToday] = await page.$x(
        "/html/body/div[2]/div[4]/div[3]/header/div/div[3]/div[1]/div/div/div/div[1]/div[3]/span[1]"
      );
      const [getStockPic] = await page.$x(
        "/html/body/div[2]/div[4]/div[3]/header/div/div[2]/img"
      );

      const storeStockValue = await getStockValue.getProperty("textContent");
      const stockValue = await storeStockValue.jsonValue();

      const storeStockName = await getStockName.getProperty("textContent");
      const stockName = await storeStockName.jsonValue();

      const storeStockToday = await getStockToday.getProperty("textContent");
      const stockToday = await storeStockToday.jsonValue();

      const storeStockPic = await getStockPic.getProperty("src");
      const stockPic = await storeStockPic.jsonValue();

      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor({ name: stockName })
        .setThumbnail(stockPic)
        .addFields(
          { name: "Stock Value", value: "$" + stockValue },
          { name: "Stock Today", value: stockToday + "%", inline: true }
        )
        .setTimestamp();
      return { embeds: [msgStyle] };
    } catch (err) {
      console.error(err.message);
      return "Please use stock name [TESLA -> TSLA]";
    } finally {
      await browser.close();
    }
  },

  //Crypto Method
  findCrypto: async function (name) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    try {
      const page = await browser.newPage();
      await page.goto("https://coinmarketcap.com/currencies/" + name + "/", {
        timeout: 0,
        waitUntil: "networkidle0",
      });

      const [getCryptoName] = await page.$x(
        "/html/body/div[1]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/h2"
      );
      const [getCryptoValue] = await page.$x(
        '//*[@id="__next"]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/span'
      );
      const [getCryptoToday] = await page.$x(
        '//*[@id="__next"]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/span'
      );
      const [getCryptoPic] = await page.$x(
        "/html/body/div[1]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/img"
      );

      const storeGetCryptoName = await getCryptoName.getProperty("textContent");
      const cryptoName = await storeGetCryptoName.jsonValue();

      const storeCryptoValue = await getCryptoValue.getProperty("textContent");
      const cryptoValue = await storeCryptoValue.jsonValue();

      const storeCryptoToday = await getCryptoToday.getProperty("textContent");
      const cryptoToday = await storeCryptoToday.jsonValue();

      const storeGetCryptoPic = await getCryptoPic.getProperty("src");
      const cryptoPic = await storeGetCryptoPic.jsonValue();

      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor({ name: cryptoName })
        .setThumbnail(cryptoPic)
        .addFields(
          { name: "Crypto Value", value: cryptoValue },
          { name: "Crypto Today", value: cryptoToday, inline: true }
        )
        .setTimestamp();
      return { embeds: [msgStyle] };
    } catch (err) {
      console.error(err.message);
      return "Please use coin name [BTC -> BITCOIN]";
    } finally {
      await browser.close();
    }
  },

  //Instagram
  findIG: async function (igName) {},

  //something
};
