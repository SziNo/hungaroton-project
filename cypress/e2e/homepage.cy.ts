describe('Homepage', () => {
  beforeEach(() => {
    cy.mockApiSuccess('mockArtists.json')
    cy.visit('/')
  })

  it('should display the welcome message', () => {
    cy.get('h1').should('contain', 'Welcome to Hungaroton Project')
  })

  it('should load the artist list', () => {
    cy.get('[data-cy="artist-item"]').should('have.length.gt', 0)
  })

  it('should display the pagination controls', () => {
    cy.get('[data-cy="pagination"]').should('exist')
  })
})
