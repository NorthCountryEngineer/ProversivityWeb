describe('Authenticator:', function() {    
  describe('sign in', ()=> {
    before(() => {
      cy.loginByCognitoApi('NCEIntegTestUser', '9aB4c2D8eF6gHiJ7kL9mNoP1rStU3vWx');
    });

    it('should display username greeting', () => {
      cy.visit('/');
      cy.get('.amplify-heading').contains('testUser');
    });
  });
});
