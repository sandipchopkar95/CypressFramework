///<reference types ="Cypress"/>
class CheckoutPage {
    checkoutLable = '.subheader'
    firstName_txtBox = '#first-name'
    lastName_txtBox = '#last-name'
    zip_txtBox = '#postal-code'
    continueButton = '.checkout_buttons [value="CONTINUE"]'
    cancelButton = '.checkout_buttons a'
    errorMessage = 'form h3'

    getCheckoutLabel() {
        return cy.get(this.checkoutLable)
    }

    getFirstNameField() {
        return cy.get(this.firstName_txtBox)
    }

    getLastNameField() {
        return cy.get(this.lastName_txtBox)
    }

    getZipField() {
        return cy.get(this.zip_txtBox)
    }


    clickOnCancelButton() {
        cy.get(this.cancelButton).contains('CANCEL').click()
    }

    validateErrors(field, errorMessage, text) {
        cy.get(this.continueButton).click();
        cy.get(this.errorMessage).should('include.text', errorMessage);
        field.type(text);
    }

    continueCheckout() {
        cy.fixture('customerDetails').then((data) => {
            this.data = data;
            cy.get(this.firstName_txtBox).type(this.data.firstname);
            cy.get(this.lastName_txtBox).type(this.data.lastname);
            cy.get(this.zip_txtBox).type(this.data.zip);
            cy.get(this.continueButton).click();
        });
    }
    


}

export default new CheckoutPage()