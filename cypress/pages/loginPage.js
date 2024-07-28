///<reference types="Cypress"/>
class LoginPage {
    username_textBox = '#user-name'
    password_textBox = '#password'
    login_Button = '#login-button'
    product_Label = '.product_label'

    loginToApplication(username, password) {
        cy.get(this.username_textBox).type(username)
        cy.get(this.password_textBox).type(password)
        cy.get(this.login_Button).click()
    }
}

export default new LoginPage()
