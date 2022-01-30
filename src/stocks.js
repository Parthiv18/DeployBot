const puppeteer = require("puppeteer");

module.exports = {
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

      const [el] = await page.$x(
        "/html/body/div[7]/div/div[10]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/g-card-section/div/g-card-section/div[2]/div[1]/span[1]/span/span[1]"
      );

      // console.log(el)
      const txt = await el.getProperty("textContent");
      const rawTxt = await txt.jsonValue();

      return rawTxt;
    } catch (err) {
      console.error(err.message);
    } finally {
      await browser.close();
    }
  },
};
