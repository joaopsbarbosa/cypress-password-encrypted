/*
* Those are some commands to encrypt the password.
*/

// Command to encrypt the password
Cypress.Commands.overwrite('type', (password, element, text, options) => {
    if(options && options.sensitive){
        options.log = false
        Cypress.log({ $el: element, name: 'type', message: '*'.repeat(text.length)})
    }
    return password(element, text, options)
})

// Command to get the password and the location to type
Cypress.Commands.add('typePassword', (location, password) => {
    cy.get(location).type(password, {sensitive: true})
})