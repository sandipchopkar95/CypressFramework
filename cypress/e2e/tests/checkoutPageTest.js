///<reference types="Cypress"/>
import LoginPage from "../../pages/loginPage"
import ProductPage from "../../pages/productPage"
import CartPage from "../../pages/cartPage"
import CheckoutPage from "../../pages/checkoutPage"
import OverviewPage from "../../pages/overviewPage"

describe('Checkout Page Suite', function () {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.fixture('credentials').then(function (data) {
            this.data = data;
            LoginPage.loginToApplication(this.data.username, this.data.password);
        })
        ProductPage.selectproduct1('Sauce Labs Backpack');
        CartPage.clickOnCheckoutButton()
    })

    it('verify cancel button', function () {
        CheckoutPage.clickOnCancelButton()
        CartPage.getCartPageLabel().should('have.text', 'Your Cart')
    })

    it('validate error messages', function () {
        cy.fixture('customerDetails').then(function (customer) {
            CheckoutPage.validateErrors(CheckoutPage.getFirstNameField(), 'First Name', customer.firstname)
            CheckoutPage.validateErrors(CheckoutPage.getLastNameField(), 'Last Name', customer.lastname)
            CheckoutPage.validateErrors(CheckoutPage.getZipField(), 'Postal Code', customer.zip)
        })
    })

    it('enter customer details and continue checkout', function () {
        CheckoutPage.continueCheckout()
        OverviewPage.getOverviewPageLabel().should('have.text','Checkout: Overview')
    })

})
