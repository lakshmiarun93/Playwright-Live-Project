import {test,expect} from "@playwright/test";
 import { signup } from "../pages/singnup";
 const dataset = JSON.parse(JSON.stringify(require("..//utils/demoblazedata.json")))
 const username = dataset.username;
 const password = dataset.password;


 test.beforeEach(async ({ page }) => {
 
    await page.goto('https://demoblaze.com/');
 
})

test('live signupPOM',async({page})=>

{
   
const obj = new signup(page)
await obj.clicklink()
await obj.enterusername(username)
await obj.enterpassword(password)
await obj.submitclick()
//await page.pause()
await expect(page.locator('xpath=//a[@id="login2"]')).toContainText("Log in")

})

 test('live signupclosePOM',async({page})=>
{

const obj = new signup(page)
await obj.clicklink()
await obj.enterusername(username)
await obj.enterpassword(password)
await obj.closesubmit()
//await page.pause()
await expect(page.locator('xpath=//a[@id="login2"]')).toContainText("Log in")

}
)