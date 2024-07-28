///<reference types="Cypress"/>
import LoginPage from "../../pages/loginPage"
import ProductPage from "../../pages/productPage"
import CartPage from "../../pages/cartPage"
import CheckoutPage from "../../pages/checkoutPage"
import OverviewPage from "../../pages/overviewPage"

describe('Checkout Overview Page Suite', function () {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.fixture('credentials').then(function (data) {
            this.data = data;
            LoginPage.loginToApplication(this.data.username, this.data.password);
        })
        ProductPage.selectproduct1('Sauce Labs Backpack');
        CartPage.clickOnCheckoutButton()
        CheckoutPage.continueCheckout()
    })

    it('verify cancel button', function () {
        OverviewPage.getCancelButton().click().then(() => {
            ProductPage.getProductPagelabel().should('have.text', 'Products')
        })
    })

    it('verify cancel button', function () {
        OverviewPage.getFinishButton().click().then(() => {
            OverviewPage.getOverviewPageLabel().should('have.text', 'Finish')
        })
    })

})
