import {test,expect} from "@playwright/test"

export class Addtocart
{

    constructor(page)
    {

this.page = page;
this.productPhone = this.page.locator('text=Samsung galaxy s6').first()
this.Addcartbtn = this.page.locator('text =Add to cart')
this.phone = this.page.locator('text=Phones')
this.laptop = this.page.locator('text=Laptops')
this.productLap = this.page.locator('text=Sony vaio i5')
this.cart = this.page.getByRole('link', { name: 'Cart' }).first();
this.placeorder = this.page.getByRole('button',{name:'Place Order'}).first()
this.name1 = this.page.locator("#name")
this.country = this.page.locator('text = Country:')
this.city = this.page.locator('text = City:')
this.creditcard = this.page.locator('text = Credit card:')
this.month1 = this.page.locator('text = Month:')
this.year1 = this.page.locator('text = Year:')
this.purchase = this.page.getByRole('button',{name:'Purchase'})
this.ok = this.page.getByRole('button',{name:'OK'})

    }

    async selectproduct()
    {
   await this.productPhone.click()

    }

    async addtocart()
    {

        await this.Addcartbtn.click()
    }

    async clickonlaptop()
    {
        await this.laptop.click()
        await this.productLap.click()
    }

    async clickonphone()
    {
        await this.phone.click()
        await this.productPhone.click()
    }
    async purchaseproduct()
    {

        await this.cart.click()
        await this.placeorder.click()
        await this.name1.fill("sree")
        await this.country.fill("india")
        await this.creditcard.fill("123")
        await this.city.fill("city")
        await this.month1.fill("jan")
        await this.year1.fill("12345")
        await this.purchase.click()
        

    }
    async clickok()
        {
await this.ok.click()
        }
    
}