const Discord = require("discord.js");
const puppeteer = require("puppeteer");
const { AnimeWallpaper } = require("anime-wallpapers");
const wall = new AnimeWallpaper();

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

  //Anime Background
  animeBackground: async function (name, msg) {
    try {
      const wallpaper = await wall.getAnimeWall2(name);
      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("WallPaper: ")
        .setAuthor({ name: name })
        .setImage(wallpaper[0].image)
        .setTimestamp();
      return { embeds: [msgStyle] };
    } catch (err) {
      return "Sorry Couldn't Find That!";
    }
  },
  //something

  getIntegration: async function (name) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox"],
    });
    try {
      const page = await browser.newPage();
      await page.goto(
        "https://quickmath.com/webMathematica3/quickmath/calculus/integrate/advanced.jsp#c=integrate_integrateadvanced&v1=" +
          name +
          "&v2=x",
        {
          timeout: 0,
          waitUntil: "networkidle0",
        }
      );
      const [getCryptoPic] = await page.$x(
        "/html/body/div[1]/div[2]/div/div[2]/div/div[2]/div[1]/div[3]/table/tbody/tr/td/table/tbody/tr/td/p[4]/span/img"
      );

      //2nd way

      const storeGetCryptoPic = await getCryptoPic.getProperty("src");
      const cryptoPic = await storeGetCryptoPic.jsonValue();

      const msgStyle = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Output [Ignore pi to 2pi]: ")
        .setAuthor({ name: "Integration -> [sin^5(x) not work => sin(x)*...sin(x) works]" })
        .setImage(cryptoPic)
        .setTimestamp();
      return { embeds: [msgStyle] };
    } catch (err) {
      console.error(err.message);
      return "error";
    } finally {
      await browser.close();
    }
  },
};
