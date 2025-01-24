Feature: Registro de usuario en AutomationPractice.pl

Scenario: Registrar un usuario ingresando datos validos
    Given que estoy en la pagina de Registro
    When completo el formuladrio de registro con informacion valida
    Then deberia ver un mensaje de registro exitoso
