describe('Sign Up Component Test', () => {
  it('Renders the sign-up component when "Sign Up" button is clicked and page renders within tolerance', () => {

    cy.visit('localhost:3000/OneOnOneHelper'); 

    cy.loginFromAmplifyLoginPage()

    cy.get('[data-testid=welcome-existing-user-dialogue]').should('exist');

  });
});