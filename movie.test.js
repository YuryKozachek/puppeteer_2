const { clickElement, getText} = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async() => {
 await page.close();
});

describe("qamid.tmweb.ru pages test", () => {

beforeEach(async () => {
  await page.goto("https://qamid.tmweb.ru");
});

test("the first logo text", async () => {
  const actual = await getText(page, ".page-header__title");
  expect(actual).toContain("Идёмвкино");

});

test("book ticket and get qr code", async () => {
   await clickElement(page, "body > nav > a:nth-child(2)");
   await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li");
   await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(10)");
   await clickElement(page, "body > main > section > button");
   await clickElement(page, "body > main > section > div > button");
   await clickElement(page, "body > main > section > div > img");
   const textQRcode = "body > main > section > div > p:nth-child(7)";
   const actual = await page.$eval(textQRcode, link => link.textContent);
   expect(actual).toContain("Покажите QR-код нашему контроллеру для подтверждения бронирования.");

});

test("switching tab and book tickets", async () => {
  await clickElement(page, "body > nav > a:nth-child(2)");
  await clickElement(page, "body > main > section:nth-child(2) > div:nth-child(2) > ul > li");
  await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
  await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)");
  await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(3)");
  await clickElement(page, "body > main > section > button");
  const textQRcode = "body > main > section > div > p:nth-child(2) > span";
  const actual = await page.$eval(textQRcode, link => link.textContent);
  expect(actual).toContain("1/1, 1/2, 1/3");

});

test("book tickets sad path", async () => {
  await clickElement(page, "body > nav > a:nth-child(2)");
  await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li");
  await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
  const textImg = "body > main > section > div.buying-scheme > div.buying-scheme__legend > div:nth-child(2) > p:nth-child(1)";
  const actual = await page.$eval(textImg, link => link.textContent);
  expect(actual).toContain("Занято");
}); 

});


 

