///<reference types="Cypress"/>
class CartPage {
    cartPageLabel='.subheader'
    productRemoveButton = 'REMOVE'
    cartBadge = 'span.shopping_cart_badge'
    continueShoppingButton = 'Continue Shopping'
    checkoutButton='CHECKOUT'

    getCartPageLabel(){
        return cy.get(this.cartPageLabel)
    }

    removeProduct() {
        cy.get('button').contains(this.productRemoveButton).click()
        cy.get(this.cartBadge).should('not.exist')
    }

    clickOnContinueShopping() {
        cy.get('a').contains(this.continueShoppingButton).click()
    }

    clickOnCheckoutButton() {
        cy.get('a').contains(this.checkoutButton).click()
    }

}

export default new CartPage()