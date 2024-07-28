///<reference types="Cypress"/>
import LoginPage from "../../pages/loginPage"
import ProductPage from "../../pages/productPage"
import CartPage from "../../pages/cartPage"

describe('Product Page Suite',function(){
    before(function(){
        cy.fixture('credentials').then((data) => {
            this.data = data
        })
    })

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        LoginPage.loginToApplication(this.data.username, this.data.password)
    });

    it('verify add product ', function() {
        ProductPage.selectproduct1('Sauce Labs Backpack')
        CartPage.getCartPageLabel().should('have.text','Your Cart')
    })
})