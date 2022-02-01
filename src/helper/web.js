const puppeteer = require("puppeteer");

module.exports = {
  //Stocks
  findStocks: async function (name) {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto(
        "https://www.google.com/search?client=firefox-b-d&q=" +
          name +
          "+stocks",
        {
          timeout: 0,
          waitUntil: "networkidle0",
        }
      );

      const [getStockValue] = await page.$x(
        "/html/body/div[7]/div/div[10]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/g-card-section/div/g-card-section/div[2]/div[1]/span[1]/span/span[1]"
      );
      const [getStockToday] = await page.$x(
        "/html/body/div[7]/div/div[10]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/g-card-section/div/g-card-section/div[2]/div[1]/span[2]/span[1]"
      );
      const storeStockValue = await getStockValue.getProperty("textContent");
      const stockValue = await storeStockValue.jsonValue();

      const storeStockToday = await getStockToday.getProperty("textContent");
      const stockToday = await storeStockToday.jsonValue();

      return "\nCurrent Stock Value: $" + stockValue + "\nToday: " + stockToday;
    } catch (err) {
      console.error(err.message);
    } finally {
      await browser.close();
    }
  },

  //Crypto
  findCrypto: async function (name) {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto("https://coinmarketcap.com/currencies/" + name + "/", {
        timeout: 0,
        waitUntil: "networkidle0",
      });

      const [getCryptoValue] = await page.$x(
        '//*[@id="__next"]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/span'
      );
      const [getCryptoToday] = await page.$x(
        '//*[@id="__next"]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/span'
      );
      const storeCryptoValue = await getCryptoValue.getProperty("textContent");
      const cryptoValue = await storeCryptoValue.jsonValue();

      const storeCryptoToday = await getCryptoToday.getProperty("textContent");
      const cryptoToday = await storeCryptoToday.jsonValue();

      return "\nCurrent Price: " + cryptoValue + " USD\nToday: " + cryptoToday;
    } catch (err) {
      console.error(err.message);
    } finally {
      await browser.close();
    }
  },

  //IG
  findIG: async function (igName) {
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      await page.goto("https://www.instagram.com/" + igName + "/", {
        timeout: 0,
        waitUntil: "networkidle0",
      });

      const [igGetName] = await page.$x(
        '/html/body/div[1]/section/main/div/header/section/div[1]/h2'
      );
      const [getName] = await page.$x(
        '/html/body/div[1]/section/main/div/header/section/div[2]/h1'
      );
      const [igGetPic] = await page.$x(
        '//*[@id="react-root"]/section/main/div/header/div/div/div/button/img'
      );
      const igStoreName = await igGetName.getProperty("textContent");
      const igRawName = await igStoreName.jsonValue();

      const storeName = await getName.getProperty("textContent");
      const rawName = await storeName.jsonValue();

      const igStorePic = await igGetPic.getProperty("src");
      const igRawPic = await igStorePic.jsonValue();
      return "\nUser Name: @" + igRawName + "\nName: " + rawName;
    } catch (err) {
      console.error(err.message);
    } finally {
      await browser.close();
    }
  },

  //something
};
