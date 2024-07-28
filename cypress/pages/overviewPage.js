///<reference types ="Cypress"/>
class OverviewPage {
    overviewPageLabel = '.subheader'
    footerButtons='.cart_footer a'

    getOverviewPageLabel() {
        return cy.get(this.overviewPageLabel)
    }

    getCancelButton(){
        return cy.get(this.footerButtons).contains('CANCEL')
    }

    getFinishButton(){
        return cy.get(this.footerButtons).contains('FINISH')
    }

    clickCancelButton(){
        this.getCancelButton().click()
    }

    clickFinishButton(){
        this.getFinishButton().click()
    }

}

export default new OverviewPage()