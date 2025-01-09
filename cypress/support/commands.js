// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('iniciarSesion', (usuario, password) =>{
     
     //Ingresar dato valido en Username 
     cy.get('#user-name').type(usuario); 
     
     //Ingresar dato valido en Password 
     cy.get('#password').type(password); 
     
     //Hacer click en el boton Login
     cy.contains('Login').click();

     //Comprobar que el login fue exitoso
     cy.contains('Products').should('be.visible');
 });
