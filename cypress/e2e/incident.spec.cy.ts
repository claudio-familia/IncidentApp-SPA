/// <reference types="cypress" />

describe('Incident process', () => {
    const validUser = {
        username: 'Administrator',
        password: '1234'
    }

    beforeEach(() => {
      cy.visit('/');
      cy.contains('Incident App');
      cy.get('input[name=username]').type(validUser.username);
      cy.get('input[name=password]').type(validUser.password);
      cy.get('button.btn-login').click();
    });
  
    it('Should create a new incident', () => {
      cy.get('a[href=/incidents]').click();
      cy.get('button').contains('Nuevo incidennte').click();

      cy.get('mat-select[name=priorityId]').click();    
      cy.get('.mat-option-text').click();
      cy.get('mat-select[name=title]').click();    
      cy.get('.mat-option-text').click();
      cy.get('textarea[name=description]').type("Some description");

      setTimeout(() => {}, 3000);
      cy.get('button[type=submit]').click()
    });
  
  })