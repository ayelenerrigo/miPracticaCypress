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

 }); 


 Cypress.Commands.add('agregarAlCarrito',(parteDelNombre)=>{
    //Hacer click en el nombre del producto (parte del nombre)
    cy.contains(parteDelNombre).click();

    //Validar que la URL contenga prod.html luego de seleccionar el producto 
    cy.url().should('include', 'prod.html'); 

    //Hacer click en Add to Cart
    cy.contains('Add to cart').click();

    //Volver a la pagina de inicio
    cy.contains('Home').click();    

 });


 Cypress.Commands.add('completarComprar',({datosCompra})=>{
    //Ir al carrito de compras
    cy.get('#cartur').click();
    
    //Hacer click en Place Order
    cy.contains('Place Order').click();

    //Completar el formulario
    cy.get('#name').type(datosCompra.nombre);
    cy.get('#country').type(datosCompra.pais);
    cy.get('#city').type(datosCompra.ciudad);
    cy.get('#card').type(datosCompra.tarjeta);
    cy.get('#month').type(datosCompra.mes);
    cy.get('#year').type(datosCompra.año);

    //Confirmar la compra 
    cy.contains('Purchase').click();
    //cy.wait(4000);

 });

 Cypress.Commands.add('leerCSV', (rutaArchivo, separador) => {
   return cy.readFile(rutaArchivo).then((contenido) => { //lee el archivo y acciona sobre el contenido
      return contenido.trim().split('\n').map(linea => linea.split(separador).map(item => item.trim())); //si no sabe que separador se usa, si sabes que es una ',' usas el de abajo
      //return contenido.trim().split('\n').map(linea => linea.split(',').map(item => item.trim())); 
      /* 
      trim: quita espacios del principio y el final
      split('\n') - (',') : en cada enter/separador lo corta y es un dato/indice del arreglo
      map: recorre cada columna y hace un arreglo adicional 
      */

   });
 });