describe('Automation practice', () => {
    it('Test-01: Carga de la pagina principal', () => {

        //Abrir la pagina de prueba
        cy.visit('http://www.automationpractice.pl/index.php');

        //Chequear que el objeto 'Cart' este visible
        cy.contains('Cart').should('be.visible'); // el texto del contains debe ser unico
    });

    it('Test-02: Evaluar que la pagina tenga al menos 3 imagenes', () => {
        cy.visit('http://www.automationpractice.pl/index.php');

        //Chequear que el numero de imagenes sea al menos 3 
        cy.get('img').should('have.length.at.least', 3);
    });

});