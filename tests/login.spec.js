import {test,expect} from "@playwright/test";
import { login } from "../pages/login";

const invaliddata = JSON.parse(JSON.stringify(require("..//utils/demoblazeloginInvaliddata.json")))
const validdata = JSON.parse(JSON.stringify(require("..//utils/demoblazedata.json")))
const validUN = validdata.username
const validPass = validdata.password


test.beforeEach(async({page})=>
{
await page.goto('https://demoblaze.com/')
}
)

test.only("valid login",async({page})=>

{
const ValidOb = new login(page);
await ValidOb.LoginLinkClick()
await ValidOb.enterUN(validUN)
await ValidOb.enterPass(validPass)
await ValidOb.login()
await expect(page.locator("#nameofuser")).toContainText("Welcome "+validUN)

}
);

test('invalid login',async({page})=>

{
for(const data of invaliddata)
{
const ob = new login(page);
await ob.LoginLinkClick()
await ob.enterUN(data.username)
await ob.enterPass(data.password)
await ob.login()
await ob.close1()
await expect(page.locator('xpath=//a[@id="login2"]')).toContainText("Log in")


}


}
)