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

  it('should paginate through the artist list', () => {
    cy.get('[data-cy="pagination"]').find('button').eq(1).click() // Go to page 2
    cy.get('[data-cy="artist-item"]').should('have.length.gt', 0)
  })

  it('should display correctly on mobile', () => {
    cy.viewport('iphone-6')
    cy.get('h1').should('be.visible')
    cy.get('[data-cy="artist-item"]').should('have.length.gt', 0)
  })
})
