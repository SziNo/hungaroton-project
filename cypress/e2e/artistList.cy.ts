describe('ArtistList Component', () => {
  beforeEach(() => {
    cy.mockApiSuccess('mockArtists.json')
    cy.visit('/')
  })

  it('should filter artists by name', () => {
    cy.selectArtistFilter('search', 'Szabo')
    cy.get('[data-cy="artist-name"]').should('contain', 'Szabo')
  })

  it('should filter artists by type', () => {
    cy.selectArtistFilter('type', 'is_composer')
    cy.get('[data-cy="artist-name"]').should('contain', 'Composer')
  })

  it('should filter artists by letter', () => {
    cy.selectArtistFilter('letter', 'A')
    cy.get('[data-cy="artist-name"]').should('contain', 'A')
  })
})
