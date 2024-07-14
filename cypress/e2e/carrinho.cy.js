describe('Teste do Carrinho de Compras', () => {

    beforeEach(() => {
      cy.visit('https://automationexercise.com/product_details/1');
      cy.contains('button', 'Add to cart').click();
      cy.visit('https://automationexercise.com/product_details/2');
      cy.contains('button', 'Add to cart').click();
      cy.visit('https://automationexercise.com/product_details/3');
      cy.contains('button', 'Add to cart').click();
    });
  
    it('Adicionar produtos ao carrinho', () => {
      cy.visit('https://automationexercise.com/view_cart');
      cy.contains('p', 'shirt', { matchCase: false }).should('be.visible');
    });
  
    it('Remover um produto do carrinho', () => {
      cy.visit('https://automationexercise.com/view_cart');
      cy.get('a[data-product-id="1"]').click();
      cy.contains('p', 'shirt', { matchCase: false }).should('not.exist');
    });
  
  });
  