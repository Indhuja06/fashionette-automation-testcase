const productList =
  'body > div.page-content > div.page-body.shift--after-header > div.container > div.signpost-mounted.signpost > div:nth-child(1)';

const productAddTocart = () => {
  cy.get('div.flex-center-content.product-details__add-to-cart-container.stuck > div > div.btn__content').click()
  cy.get('section.minicart__footer > div.btn.minicart__got-to-cart > div.btn__content').click()
}

Cypress.Commands.add('findProductOnCategory', (productId) => {
  cy.get(`[data-product-id="${productId}"]`)
    .should('have.attr','data-product-id',productId);
});

Cypress.Commands.add('addToCart', () => {
  productAddTocart();
});

Cypress.Commands.add('goToCartPage', () => {
  cy.get('.div.btn.minicart__got-to-cart > div.btn__content').click();
});

Cypress.Commands.add('addVoucherCode', (voucherCode) => {
  cy.get('.cart__sum__voucher-link').click();
   cy.get('input[name="voucherCode"]').focus().clear().type(voucherCode);
   cy.get('#form-cart-voucher > div.btn-default.btn--submit > button.btn__submit').click();
   
   cy.get(`[data-code="${voucherCode.toLowerCase()}"]`)
   .should('have.attr', 'data-voucher-confirm-delete');
});
