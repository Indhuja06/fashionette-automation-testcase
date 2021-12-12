const data = require('../data');

describe('Add a product to the cart and login', function () {
  beforeEach(function () {
    cy.visitHomePage();
  });
  it(`Check if the ${data.category} category is available on the homepage`, function () {
    cy.findCategory(data.category);
  });
  it(`Can it be clicked on ${data.category} category`, function () {
    cy.categoryClick(data.category);
  });
  it(`Check if the ${data.product.name}  is available on the ${data.category} category`, function () {
    cy.categoryClick(data.category);
    cy.findProductOnCategory(data.product.id);
  });
  it(`Is it going to ${data.product.name} details page`, function () {
    cy.categoryClick(data.category);
    cy.findProductOnCategory(data.product.id).click();
    cy.url().should('include', data.product.hash_path);
  });
  it(`AddToCart the ${data.product.name} product and authenticate`, function () {
    cy.categoryClick(data.category);
    cy.findProductOnCategory(data.product.id).click();
    cy.url().should('include', data.product.hash_path);
    cy.addToCart();
    cy.get('#checkout-start').click()
    cy.waitFor(300)
    const username = Cypress.config('userName');
    const password = Cypress.config('password');
    cy.authenticate({ username, password });
  });
});
