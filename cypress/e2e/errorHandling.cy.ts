describe('Error Handling', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display an error message on API failure', () => {
    cy.mockApiError() // Simulate an API error
    cy.visit('/')
    cy.get('[data-cy="error-message"]').should('be.visible') // Verify the error message
    cy.get('[data-cy="retry-button"]').click() // Test the retry button
  })

  it('should display "No artists found" message', () => {
    cy.mockApiSuccess('mockEmptyArtists.json') // Mock empty artists response with isError true
    cy.visit('/')
    cy.get('[data-cy="no-artists-message"]').should('be.visible') // Verify the message
  })
})
