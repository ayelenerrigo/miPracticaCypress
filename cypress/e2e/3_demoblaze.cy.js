describe('DemoBlaza', () => {
    it('Test-01: Completar el formulario de contacto',() => {
        //cy.viewport(382,543); //Resolucion por pixeles
        
        
        //Acceder a la pagina de prueba
        cy.visit('https://www.demoblaze.com/');

        //Chequeo de que abrio bien
        cy.contains('PRODUCT STORE').should('be.visible');
        cy.screenshot();

        //Hacer click en el enlace Contact
        cy.get(':nth-child(2) > .nav-link').click();

        //Completar el formulario
        cy.get('#recipient-email').type('prueba@gmail.com');
        cy.get('#recipient-name').type('Prueba Aye');
        cy.get('#message-text').type('Estoy probando si puedo automatizar sola');
        
        cy.screenshot();

        //Hacer click en el boton Send Message
        cy.contains('Send message').click();

        cy.screenshot();

        //Chequear que el envio fue exitoso - NO PUDE HACER QUE FUNCIONE
        cy.wait(8000);
        cy.contains('Thanks for the message!!').should('exist');
    });

});