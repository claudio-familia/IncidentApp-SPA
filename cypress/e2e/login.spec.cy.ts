/// <reference types="cypress" />

describe('Login process', () => {
  const validUser = {
    username: 'Administrator',
    password: '1234'
  }

  beforeEach(() => {
    cy.visit('/');
    cy.contains('Incident App');
  });

  it('TryLoginWithCorrectUser', () => {
    cy.get('input[name=username]').type(validUser.username);
    cy.get('input[name=password]').type(validUser.password);
    cy.get('button.btn-login').click();    
    setTimeout(() => {}, 3000);
    cy.contains('Usuarios')
  });

  it('TryLoginWithNotExistingUser', () => {
    cy.get('input[name=username]').type("random user");
    cy.get('input[name=password]').type(validUser.password);
    cy.get('button.btn-login').click();  
    setTimeout(() => {}, 3000);
    cy.contains('Error al validar').and('be.visible')
  });

  it('TryLoginWithInvalidCredentials', () => {
    cy.get('input[name=username]').type(validUser.username);
    cy.get('input[name=password]').type("123456789");
    cy.get('button.btn-login').click();
    setTimeout(() => {}, 3000);
    cy.contains('Error al validar').and('be.visible')
  });
})