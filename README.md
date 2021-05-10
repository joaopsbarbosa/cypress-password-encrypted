# cypress-password-encrypted 🔐
As a Test Automation Engineer working with Cypress.io I've been strugling to find some solutions for my problems. 
This was a challenge to get our password encrypted and then to not show it everytime that we want show the test running
to a stranger.

## Usage
`cypress-password-encrypted` extends Cypress' `cy` command.

To encrypt and type the password:
```javascript
cy.typePassword('#password','P4$sw0rd.1')
```
So, first you should introduce the location and then your password.
Quick example:
```javascript
describe('Show password encrypted', () => {
    it('Simple login test (password encrypted)', () => {
        cy.visit('https://dashboard.cypress.io/login')
        cy.get('.btn-provider-email').click()
        cy.get('#email').type('emailtest@test.test')
        cy.typePassword('#password', 'P4$sw0rd.1')
    })
})
```
✅ get #password
>_type **********

Insted of...

🙅‍♂️get #password
>_type P4$sw0rd.1

