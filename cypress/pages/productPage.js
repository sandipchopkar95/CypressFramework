///<reference types="Cypress"/>
class ProductPage {
    productPage_Label = '.product_label'
    addToCart_Buttons = 'button.btn_inventory'
    productName_Label = '.inventory_item_name'
    shoppingCart_Button = 'a.shopping_cart_link'

    getProductPagelabel() {
        return cy.get(this.productPage_Label)
    }
    getproductNames() {
        return cy.get(this.productName_Label)
    }
    getAddToCartButtons() {
        return cy.get(this.addToCart_Buttons)
    }

    selectproduct1(productName) {
        cy.selectProduct(productName)
        cy.get(this.shoppingCart_Button).click()
    }

}

export default new ProductPage()