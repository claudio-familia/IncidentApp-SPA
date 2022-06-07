/// <reference types="cypress" />

describe('SLA process', () => {
    const validUser = {
        username: 'Administrator',
        password: '1234'
    }

    beforeEach(() => {
      cy.visit('/');
      cy.contains('Incident App');  
    });
  
    it('Should create a new SLA', () => {
      cy.login(validUser.username, validUser.password);

      cy.get(':nth-child(8) > a > .card > .card-body').click();
      cy.get('button').contains('Nuevo').click();

      cy.get('#description').type("Some description");
      cy.get('#hours').type("5");

      setTimeout(() => {}, 3000);
      cy.get('button[type=submit]').click()
    });
  
  })