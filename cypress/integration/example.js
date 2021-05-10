/*
* This is an example using a simple command encrypt the 
* password on the Cypress log screen for a simple login.
*/

describe('Show password encrypted', () => {

    it('Simple login test (password encrypted)', () => {
        cy.log('Here on the logs, the password should be encrypted')

        // Test steps
        cy.visit('https://dashboard.cypress.io/login')
        cy.get('.btn-provider-email').click()
        cy.get('#email').type('emailtest@test.test')

        // Type the password and show it encrypted
        cy.typePassword('#password', 'P4$sw0rd.1')

    })

})