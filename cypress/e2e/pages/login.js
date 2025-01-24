class login {
    //Atributos/Elementos de la pagina
    userTxt = '#user-name';
    passwordTxt = '#password';
    loginBtn = '#login-button';


    //Acciones que se pueden hacer sobre la pagina
    constructor() {} //para poder usar los elementos en otros archivos


    enterUser(valor) {
        cy.get(this.userTxt).type(valor); //this: palabra reservada para referirse a un objeto dentro de la clase
    }

    enterPassword(valor) {
        cy.get(this.passwordTxt).type(valor); 
    }

    clickOnLogin(){
        cy.get(this.loginBtn).click();
    }

}

export default new login();