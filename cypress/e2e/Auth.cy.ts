describe('Unauthorized Access Test', () => {
  it('Renders Amplify useAuthentication() view when user is not authenticated', () => {
    // Visit the page you want to test (replace with your actual URL)
    cy.visit('localhost:3000/OneOnOneHelper'); 

    // Wait for the element to appear (if necessary)
    cy.contains('Sign In').should('exist'); // Check for the text 'Sign In'
  });
});