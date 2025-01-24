import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import { faker } from "@faker-js/faker";


Given ('que estoy en la pagina de Registro', () => {
    //Abrir pagina AutomationPractice
    cy.visit('http://www.automationpractice.pl/');

    //Hacer click en 'Sign in'
    cy.contains('Sign in').click();
    cy.url().should('include', 'controller=authentication&back=my-account');

    //Escribir el correo electronico 
    cy.get('#email_create').type(faker.internet.email()); //crea un mail distinto cada vez que se crea un usuario

    //Click en Create An Account 
    cy.get('#SubmitCreate').click();
});

When ('completo el formuladrio de registro con informacion valida', () => {
    //Completar los campos del formulario
    cy.get('#id_gender1').check(); //check: se usa para radio button
    cy.get('#customer_firstname').type(faker.person.firstName());
    cy.get('#customer_lastname').type(faker.person.lastName());
    cy.get('#email').clear(); // vacia el campo
    cy.get('#email').type(faker.internet.email());//pone otro mail
    cy.get('#passwd').type(faker.internet.password());//pone otro mail

        //Date of Birth
    cy.get('#days').select('6');
    cy.get('#months').select('July');
    cy.get('#years').select('1995');
    
    cy.get('#newsletter').check(); //Sign up for our newsletter!

    //Click en boton Register
    cy.contains('Register').click();


});

Then ('deberia ver un mensaje de registro exitoso', () => {
    //Validar que aparezca el mensaje
    cy.url().should('include', 'controller=my-account');
    cy.contains('Your account has been created.').should('be.visible');
});