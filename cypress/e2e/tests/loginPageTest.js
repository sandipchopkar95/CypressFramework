///<reference types="Cypress"/>
import LoginPage from "../../pages/loginPage"
import ProductPage from "../../pages/productPage"

describe('Login Page Suite', function() {

    before(function() {
        cy.fixture('credentials').then((data) => {
            this.data = data
        })
    })

    beforeEach(function() {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    });

    it('verify valid login', function() {
        LoginPage.loginToApplication(this.data.username, this.data.password)
        ProductPage.getProductPagelabel().should('have.text', 'Products')
    })

})
