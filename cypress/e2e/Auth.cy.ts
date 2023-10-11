describe('Unauthorized Access Test', () => {
  it('Renders Amplify useAuthentication() view when user is not authenticated', () => {
    // Visit the page you want to test (replace with your actual URL)
    cy.visit('localhost:3000/OneOnOneHelper'); 

    // Wait for the element to appear (if necessary)
    cy.contains('Sign In').should('exist'); // Check for the text 'Sign In'
  });
});


describe('Unauthorized Access Test', () => {
  it('Renders Amplify useAuthentication() view when user is not authenticated', () => {
    // Visit the page you want to test
    cy.visit('localhost:3000/OneOnOneHelper');

    // Fill in the username field
    cy.get('input[name="username"]').type(Cypress.env('username'));

    // Fill in the password field
    cy.get('input[name="password"]').type(Cypress.env('password'));

    // Click the "Sign in" button
    cy.get('button[type="submit"]').click();

    // Now, wait for the "You are not signed up yet" text to appear
    cy.contains('You aren\'t signed up yet').should('exist');
  });
});

