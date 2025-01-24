import{
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

/*
import {
    login
} from "../pages/login"; */

/* ANALOGIA:

it ('Test', () => {
    //Paso a paso
    });
*/


Given ('que estoy en la pagina de inicio de sesion', () =>{
    //Paso a paso para implementar este given en JS
    cy.visit("/", {retryOnStatusCodeFailure: true});
    cy.contains('Swag Labs').should('be.visible');
});

When ('ingreso mis credenciales validas', () =>{
    cy.iniciarSesion('standard_user', 'secret_sauce' );
    /*//Paso a paso en JS
    login.enterUser('standar_user');
    login.enterPassword('secret_sauce');
    login.clickOnLogin();*/
});

Then ('deberia ver la pagina de productos', () =>{
    //Paso a paso en JS
    cy.url().should('include','/inventory.html');
    cy.get('.title').should('have.text','Products'); //si no coincide, te falla la prueba 
/*
    var titulo = cy.get('.title').text();
    if (titulo !== 'Products') {
        cy.log('El titulo no coincide') //no te falla la prueba, pero te avisa en la terminal 
    };
    
    */


    cy.get('.shopping_cart_link').should('exist');
});

When ('ingreso mis credenciales invalidas', () =>{
    cy.iniciarSesion('X', 'X' );
});

Then ('deberia ver un mensaje de error en pantalla', () =>{
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    cy.get('[data-test="error"]').should('be.visible');
   // cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service').should('be.visible');
    
});