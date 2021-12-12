const emailErrorId = '#email-error';
const passwordErrorId = '#password-error';

describe('Login Test', function () {
  beforeEach(() => {
    cy.visitLoginPage();
  });
  it('Not existing user', function () {
    const username = 'shivadev';
    const password = Cypress.config('password');
    cy.authenticate({ username, password });
    cy.get(emailErrorId).contains("Please enter your e-mail in the correct format");
  });
  it('Incorrect password', function () {
    const username = Cypress.config('userName');
    const password = '1233';
    cy.authenticate({ username, password });
    cy.get(passwordErrorId).contains("The password must be at least 8 characters");
  });
  it('Successful login', function () {
    const username = Cypress.config('userName');
    const password = Cypress.config('password');
    cy.authenticate({ username, password });
    cy.url().should('include', '/account/customer');
    cy.get('.account__welcome').contains('welcome to your account');
  });
});
