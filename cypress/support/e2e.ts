// Import commands.js using ES2015 syntax:
import './commands'

declare global {
    namespace Cypress {
      interface Chainable {
        deleteUser(): Chainable<JQuery<HTMLElement>>
        loginFromAmplifyLoginPage(): Chainable<JQuery<HTMLElement>>
      }
    }
  }

Cypress.Commands.add('loginFromAmplifyLoginPage', () => {

  // Fill in the username field
  cy.get('input[name="username"]').type(Cypress.env('username'));

  // Fill in the password field
  cy.get('input[name="password"]').type(Cypress.env('password'));

  // Click the "Sign in" button
  cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('deleteUser', () => {
  cy.log('Deleting user '+ Cypress.env('username'));
  cy.get('[data-testid=delete-user-account-button]').should('exist');
  cy.get('[data-testid=delete-user-account-button]').click();
});
