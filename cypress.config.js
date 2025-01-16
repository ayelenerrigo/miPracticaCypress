import { defineConfig } from "cypress";

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on,config) {
  await addCucumberPreprocessorPlugin(on,config);

       on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    }


export default defineConfig({
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: false, 
    stepDefinitions: 'cypress/e2e/steps_definitions/',
    },
    chromeWebSecurity: false,

  e2e: {
    setupNodeEvents,
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/features/*.feature",
     baseUrl:"https://www.saucedemo.com/"

    //resolucion de pantalla estandar - Aplica para todos los scripts
    // viewportWidth:382,
    // viewportHeight: 587,


  },
});
