const inputUserNameId = 'input[name="email"]';
const inputPasswordId = 'input[name="password"]';

Cypress.Commands.add('visitLoginPage', () => {
  cy.visit(`${Cypress.config('baseUrl')}/login`);
});

Cypress.Commands.add('authenticate', ({ username, password }) => {
  cy.get(inputUserNameId).focus().clear().type(username);
  cy.get(inputPasswordId).focus().clear().type(password);
  cy.get('.btn__submit').contains('Login').click()
});

  