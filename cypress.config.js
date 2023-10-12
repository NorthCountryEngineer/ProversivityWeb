import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    testIsolation: true,
  },

  env: {
    username: "eric.p.yager@gmail.com",
    password: "$ocAdmin12",
    userPoolId: "us-east-1_7d0kzod7w",
    clientId: "2rjh78vei45uc9seknfqkljsbj",
  },

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
