import loginPage from "../pages/login.page"
import productsPage from "../pages/product.page"

describe('detailles product', { tags: '@regression' },() => {
  context('success', ()=>{
    it('passes', { tags: '@tc-005' },() => {
      cy.visit('https://www.saucedemo.com/')
      loginPage.login("standard_user", "secret_sauce")
      productsPage.cliquerSurProduit("Sauce Labs Backpack")


    })
  })




})