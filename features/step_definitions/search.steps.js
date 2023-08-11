const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 20000,
  });
});

When("user clicks on the tabs {string}",{timeout: 10 * 5000}, async function (string) {
  return await clickElement(this.page, string);
  
});

Then("user sees the booking information {string}",{timeout: 10 * 5000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > div > p:nth-child(2) > span");
  const expected = await string;
  expect(actual).contains(expected);
});