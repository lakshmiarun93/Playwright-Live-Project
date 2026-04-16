import {test,expect} from "@playwright/test";

export class signup
{

    constructor(page)
    {
        this.page=page;
this.signuplink = this.page.locator('xpath=//a[@id="signin2"]');
this.username=this.page.locator("#sign-username")
this.password =this.page.locator("#sign-password")
this.submitbtn = this.page.getByRole('button',{name:"Sign up"})
this.close = this.page.getByRole('button',{name:"close"}).last()

    }
    async clicklink()
    {
        await this.signuplink.click();
       

    }
    async enterusername(usernamevalue)
    {
       
       await this.username.fill(usernamevalue)
    }
    async enterpassword(passwordvalue)
    {
        await this.password.fill(passwordvalue)
    }
    async submitclick()
    {
        await this.submitbtn.click()
    }
     async closesubmit()
    {
        await this.close.click()
    }

}