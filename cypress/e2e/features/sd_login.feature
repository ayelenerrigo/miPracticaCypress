Feature: Iniciar sesion en saucedemo.com

    Background: 
        Given que estoy en la pagina de inicio de sesion

    @happyPath @regression
    Scenario: Iniciar sesion con credenciales validas
        When ingreso mis credenciales validas
        Then deberia ver la pagina de productos 

    @negative @regression
    Scenario: Iniciar sesion con credenciales invalidas
        When ingreso mis credenciales invalidas
        Then deberia ver un mensaje de error en pantalla
