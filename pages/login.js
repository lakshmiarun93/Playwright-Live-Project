import {test,expect }from "@playwright/test";

export class login
{
constructor(page)
{
this.page = page;
this.loginlink = this.page.locator('xpath=//a[@id="login2"]');
this.username = this.page.locator("#loginusername")
this.password = this.page.locator("#loginpassword")
this.logoutBTN = this.page.locator("#logout2")
this.loginbtn = this.page.getByRole('button',{name : "Log in"})
this.successLogin = this.page.locator("#nameofuser")
this.close = this.page.getByRole('button',{name:"Close"}).last()
}

async LoginLinkClick()
{
    await this.loginlink.click()
}
async enterUN(username)
{
await this.username.fill(username)

}
async enterPass(pass)
{
    await this.password.fill(pass)
}
async login()
{
    await this.loginbtn.click()
}
async close1()
{

    await this.close.click()
}
async logout()
{

    await this.logoutBTN.click()
}
}
//module.exports = login;