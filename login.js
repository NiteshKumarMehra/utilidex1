const {chromium} = require('playwright');
const expect = require('expect');

(async() => {
const browser = await chromium.launch({headless:false, slowMo: 50})  
const context = await browser.newContext()
const page = await context.newPage()

await page.goto('https://utilidexalpha.b2clogin.com/utilidexalpha.onmicrosoft.com/b2c_1_susi/oauth2/v2.0/authorize?client_id=f41f4765-3d15-466e-9ad0-336cd21421ef&redirect_uri=https%3A%2F%2Fenergyqapaas.azurewebsites.net&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DqEIpHqtVOhNXX7K2_KV779HruyE1LG_Yof83YSsPgvOqg8CCt5i_6osOgidUJdloFRhfqZQZzD_zmbFJXkYlx8TefXGVDeTdna7-Z2JoArrain2arY3lS8v0vz1-i22rsUy5OEDe88NTd4CyJMrDZuAzRbW4lAm1kMTofCgKz61fRqw9IZObvMbgBWlDkGfXzwvMNJ7vti-zcaUGm6EfFlMtZM7NkwDNJiRSgxjfsKdfTooM8mAxDQuNFY6cE87Z&nonce=637837041619082752.ZjkxNDk1MzktYTFkNy00MWZjLThlOGItZmIwNTY2YzYxM2FjY2E3NGFkYmEtMGM3My00NTJmLTkyZDEtOGI3Yzc0MWQ3NDhj&x-client-SKU=ID_NET45&x-client-ver=5.3.0.0')

await page.fill('input[type = "email"]', 'manith09@aol.com')
await page.press('input[type = "email"]','Tab')
await page.type('input[type = "password"]', 'Aug@2022',{delay :300})

await page.check('#rememberMe')
const signIn = await page.$('#next')
await signIn.click()

const page1 = await context.newPage()
await page1.waitForTimeout(30000);

await page.mouse.move(10,10);

await page.locator('#menuContainer')

const menu = await page.$('"sub_text"')
await menu.click()

await page1.goto('https://energyqapaas.azurewebsites.net/ForecastCurve/ForecastCurve')
await page1.waitForTimeout(30000);

//const SiteData = await page1.$('#SiteData')
 //await SiteData.click()
    // Opens popup.
  //  await  page.$('#SiteData').click()


//await page.waitForTimeout(3000)

//await page.goBack()
//await page.waitForTimeout(2000)
//await page.goForward()
//await page.waitForTimeout(2000)
await browser.close()

})()
