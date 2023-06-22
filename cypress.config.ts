const { defineConfig } = require('cypress');
const { fromNodeProviderChain } = require('@aws-sdk/credential-providers')
const preprocessor = require('@cypress/webpack-preprocessor');

async function resolveAWSCreds(config) {
  config.env.awscredentials = await fromNodeProviderChain()();
  return config;
}

module.exports=defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on ("file:preprocessor", preprocessor())
      config.baseUrl = 'http://localhost:3000/';
      return resolveAWSCreds(config);
      }
    },
});