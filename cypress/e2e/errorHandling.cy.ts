describe('Error Handling', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display an error message on API failure', () => {
    cy.mockApiError()
    cy.visit('/')
    cy.get('[data-cy="error-message"]').should('be.visible')
    cy.get('[data-cy="retry-button"]').click()
  })

  it('should retry fetching artists on button click', () => {
    cy.mockApiError()
    cy.visit('/')
    cy.get('[data-cy="error-message"]').should('be.visible')

    cy.mockApiSuccess('mockArtists.json')
    cy.get('[data-cy="retry-button"]').click()
    cy.get('[data-cy="artist-item"]').should('have.length.gt', 0)
  })

  it('should display "No artists found" message', () => {
    cy.mockApiSuccess('mockEmptyArtists.json')
    cy.visit('/')
    cy.get('[data-cy="no-artists-message"]').should('be.visible')
  })
})
