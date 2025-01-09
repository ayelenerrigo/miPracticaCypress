describe('Swage Labs', () => {
    /*
    it('Test-01: Login con datos validos', () => {

        //Abrir la pagina de prueba
        cy.visit('https://www.saucedemo.com/');

        //Ingresar dato valido en Username 
        cy.get('#user-name').type('standard_user'); 
        
        
        //Ingresar dato valido en Password 
        cy.get('#password').type('secret_sauce'); 
        
        //Hacer click en el boton Login
        cy.contains('Login').click();

        //Comprobar que el login fue exitoso
        cy.contains('Products').should('be.visible');
    });
*/
    it ('Test-03: Inicio de sesion usando comandos', () =>{
        cy.visit('https://www.saucedemo.com/');

        //invocar al comando iniciarSesion
        cy.iniciarSesion('standard_user', 'secret_sauce' )
    });
});