describe('Login specs', () => {
  it('user input should get focus when it clicks on it', () => {
    // Arrange

    // Act
    cy.visit('/');

    cy.findAllByRole('textbox').as('userInput');
    cy.get('@userInput').click();

    // Assert
    cy.get('@userInput').should('have.focus');
  });

  it('should show an snackbar with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    const errorMessage = 'Usuario y/o password no válidos';

    // Act
    cy.visit('/');

    cy.findByRole('textbox').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.findByRole('button').as('submitButton');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    cy.get('@submitButton').click();

    cy.findByText(errorMessage).as('snackbar');

    // Assert
    cy.get('@userInput').should('exist');
  });

  it('should navigate to submodule list url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');

    cy.findByRole('textbox').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.findByRole('button').as('submitButton');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    cy.get('@submitButton').click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
