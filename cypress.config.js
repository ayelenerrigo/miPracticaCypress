const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //resolucion de pantalla estandar - Aplica para todos los scripts
    // viewportWidth:382,
    // viewportHeight: 587,


  },
});
