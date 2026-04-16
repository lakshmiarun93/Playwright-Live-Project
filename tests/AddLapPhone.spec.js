import {test,expect} from "@playwright/test";
import { Addtocart } from "../pages/Addtocart";
import { login } from "../pages/login";
const validdata = JSON.parse(JSON.stringify(require("..//utils/demoblazedata.json")))
const validUN = validdata.username
const validPass = validdata.password

test.beforeEach(async({page})=>
{
await page.goto('https://demoblaze.com/')
}
)

test("valid login",async({page})=>

{
const ValidOb = new login(page);
await ValidOb.LoginLinkClick()
await ValidOb.enterUN(validUN)
await ValidOb.enterPass(validPass)
await ValidOb.login()
//await expect(page.locator("#nameofuser")).toContainText("Welcome "+validUN)

}
);
test('add to cart phone',async({page})=>
{
const obj = new Addtocart(page)
await obj.clickonphone()
page.on('dialog',dialog=>dialog.accept())
await obj.addtocart()
await obj.purchaseproduct()

})

test('add to cart laptop',async({page})=>
{
const obj2 = new Addtocart(page)
await obj2.clickonlaptop()
page.on('dialog',dialog=>dialog.accept())
await obj2.addtocart()
await obj2.purchaseproduct()

}
)