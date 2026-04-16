const { test: baseTest } = require('@playwright/test');
import  login  from "../pages/login";
const validdata = JSON.parse(JSON.stringify(require('../utils/demoblazedata.json')));
const validUN = validdata.username;
const validPass = validdata.password;

exports.test = baseTest.extend({
  login: async ({ page }, use) => {
    await page.goto("https://demoblaze.com/");

    const loginPage = new login(page);
    await loginPage.LoginLinkClick();
    await loginPage.enterUN(validUN);
    await loginPage.enterPass(validPass);
    await loginPage.login();

    await use(page);
  }
});

exports.expect = baseTest.expect;