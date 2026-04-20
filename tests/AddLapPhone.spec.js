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


test('add to cart phone',async({page})=>
{
const ValidOb = new login(page);
await ValidOb.LoginLinkClick()
await ValidOb.enterUN(validUN)
await ValidOb.enterPass(validPass)
await ValidOb.login()
const obj = new Addtocart(page)
await obj.clickonphone()
page.on('dialog',dialog=>dialog.accept())

await obj.addtocart()
await obj.purchaseproduct()
await expect(page.getByRole('button',{name:'OK'})).toContainText("OK")
await obj.clickok()

})

test('add to cart laptop',async({page})=>
{
const ValidOb = new login(page);
await ValidOb.LoginLinkClick()
await ValidOb.enterUN(validUN)
await ValidOb.enterPass(validPass)
await ValidOb.login()
const obj2 = new Addtocart(page)
await obj2.clickonlaptop()
page.on('dialog',dialog=>dialog.accept())
await obj2.addtocart()
await obj2.purchaseproduct()
await expect(page.getByRole('button',{name:'OK'})).toContainText("OK")
await obj2.clickok()

}
)