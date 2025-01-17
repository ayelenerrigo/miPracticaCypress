import {
    Given,
    When, 
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given ('que abrimos la pagina de DemoBlanze.com', () => {
    cy.visit('https://www.demoblaze.com/');
});

When ('elijo la categoria {string} y selecciono el producto que contenga {string} y completo la compra', (categoria, parteDelNombre) =>{
    //Hacer clic en la categoria
    cy.contains(categoria).click();

    //Hacer click en el nombre del producto (parte del nombre)
    cy.contains(parteDelNombre).click();

    //Validar que la URL contenga prod.html luego de seleccionar el producto 
    cy.url().should('include', 'prod.html'); 

    //Hacer click en Add to Cart
    cy.contains('Add to cart').click(); 

    //Ir al carrito de compras
    cy.get('#cartur').click();
    
    //Hacer click en Place Order
    cy.contains('Place Order').click();

    //Completar el formulario
    cy.get('#name').type('Juan Perez');
    cy.get('#country').type('Argentina');
    cy.get('#city').type('CABA');
    cy.get('#card').type('8545965865985658');
    cy.get('#month').type('5');
    cy.get('#year').type('2028');

    //Confirmar la compra 
    cy.contains('Purchase').click();
    cy.wait(4000);

});

When ('selecciono la categoria {string} y selecciono el producto que contenga {string} y completo la compra con:', (categoria, parteDelNombre, listaDatos) =>{
   //Agregar el producto al carrito
   cy.contains(categoria).click();
   cy.agregarAlCarrito(parteDelNombre); 

   //Completar la compra 
   //recorre la lista entendiendo que pueden ser varias filas (varios clientes)
   listaDatos.hashes().forEach((datosCompra) =>{
    cy.completarComprar({datosCompra: datosCompra,});
   });
   

});

Then ('debo ver el mensaje de compra exitosa', () => {
    cy.contains('Thank you for your purchase!').should('exist');
});