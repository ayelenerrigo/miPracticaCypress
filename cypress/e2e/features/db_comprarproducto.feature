Feature: Compra de producto en DemoBlanze.com

@DemoBlanze
Scenario: Agregar producto al carrito y completar la compra con datos validos 
    Given que abrimos la pagina de DemoBlanze.com
    When elijo la categoria "Laptops" y selecciono el producto que contenga "Dell" y completo la compra
    Then debo ver el mensaje de compra exitosa 


Scenario: Completar la compra ingresando los datos desde el Feature
    Given que abrimos la pagina de DemoBlanze.com
    When selecciono la categoria "Laptops" y selecciono el producto que contenga "Dell" y completo la compra con: 
        |nombre       |pais       |ciudad       |tarjeta       |mes       |año       |
        |Maximiliano  |Argentina  |Rio tercero  |0257536459    |02        |2025      |
    Then debo ver el mensaje de compra exitosa
