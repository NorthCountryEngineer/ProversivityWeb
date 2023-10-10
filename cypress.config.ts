import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
      "username": "eric@northcountryengineer.com", 
      "password": "$ocAdmin12", 
      "userPoolId": "us-east-1_7d0kzod7w", 
      "clientId": "2rjh78vei45uc9seknfqkljsbj"
  },
});