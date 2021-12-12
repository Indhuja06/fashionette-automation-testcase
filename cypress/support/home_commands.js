const productList =
  'body > div.page-content > div.page-body.shift--after-header > div.container > div.signpost-mounted.signpost > div:nth-child(1)';

Cypress.Commands.add('visitHomePage', () => {
  cy.visit(`${Cypress.config('baseUrl')}`);
});

Cypress.Commands.add('findCategory', (category) => {
  cy.get(`${productList} > a > p`).contains(category);
});

Cypress.Commands.add('categoryClick', (category) => {
  cy.get(`${productList} > a`).click();
  cy.visit(`${Cypress.config('baseUrl')}/${category.toLowerCase()}`);
  cy.get(`.category__name`).contains(category);
});
