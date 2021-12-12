const username = Cypress.config('userName');
const password = Cypress.config('password');

describe('Modify user information', function () {
  beforeEach(() => {
    cy.visitLoginPage();
  });
  it('Check that user able to edit the First & Last name', function () {
    cy.authenticate({ username, password });
    cy.url().should('include', '/account/customer');
    cy.get('.account-personaldata > a.account__headline').click()
    cy.get('.account--address__action--update').click();
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('input[name="firstName"]').focus().clear().type(`userF ${id}`);
    cy.get('input[name="lastName"]').focus().clear().type(`userL ${id}`);
    cy.get('.account--address__action--save').click();
    cy.get('.account__content__column--customer').contains(`userF ${id}`)
  });
});
