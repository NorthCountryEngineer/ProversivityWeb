describe('Sign Up Component Test', () => {
  it('Renders the sign-up component when "Sign Up" button is clicked and page renders within tolerance', () => {

    cy.visit('localhost:3000/OneOnOneHelper'); 

    cy.loginFromAmplifyLoginPage()
  
    // Wait for the element to appear (if necessary)
    cy.get('[data-testid=sign-up-dialogue-toggle-button]').should('exist');
  
    // Click the "Click here to Sign up" button
    cy.get('[data-testid=sign-up-dialogue-toggle-button]').click();
  
    // Now, the sign-up component should be visible
    cy.get('[data-testid=sign-up-dialog]').should('be.visible');
  
    // Type the first name
    cy.get('[data-testid=sign-up-dialog-firstName]').type("Integration");
  
    // Type the last name
    cy.get('[data-testid=sign-up-dialog-lastName]').type("TestUser");
  
    // Click the submit button
    cy.get('[data-testid=sign-up-dialog-submitButton]').click();

    cy.get('[data-testid=welcome-existing-user-dialogue]').should('exist');

    cy.deleteUser()

    cy.contains('You aren\'t signed up yet').should('exist')
  });
});