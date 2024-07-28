///<reference types="Cypress"/>
import LoginPage from "../../pages/loginPage"
import ProductPage from "../../pages/productPage"
import CardPage from "../../pages/cartPage"
import CheckoutPage from "../../pages/checkoutPage"

describe('Card Page Suite', function () {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.fixture('credentials').then(function(data) {
            this.data = data;
            LoginPage.loginToApplication(this.data.username, this.data.password);
        });
        ProductPage.selectproduct1('Sauce Labs Backpack');
    });

    it('verify remove product', function () {
        CardPage.removeProduct()
    })

    it('verify continue shopping', function () {
        CardPage.clickOnContinueShopping()
        ProductPage.getProductPagelabel().should('have.text', 'Products')
    })

    it('verify checkout button', function () {
        CardPage.clickOnCheckoutButton()
        CheckoutPage.getCheckoutLabel().should('have.text','Checkout: Your Information')
    })
})
