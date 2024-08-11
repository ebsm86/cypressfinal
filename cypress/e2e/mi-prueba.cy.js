// cypress/e2e/mi-prueba.cy.js
describe('Mi Primera Prueba', () => {
    it('Visita la página de inicio', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').click();
  
      // Debe haber un nuevo URL que incluye '/commands/actions'
      cy.url().should('include', '/commands/actions');
    });
  });