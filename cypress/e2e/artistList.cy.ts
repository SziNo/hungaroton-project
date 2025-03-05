describe('ArtistList Component', () => {
  beforeEach(() => {
    cy.mockApiSuccess('mockArtists.json')
    cy.visit('/')
  })

  it('should filter artists by name', () => {
    cy.get('[data-cy="search-filter"]').should('be.visible')
    cy.selectArtistFilter('search', 'Szabo')
    cy.get('[data-cy="artist-name"]').should('contain', 'Szabo')
  })

  it('should filter artists by type', () => {
    cy.get('[data-cy="type-filter"]').should('be.visible')
    cy.selectArtistFilter('type', 'is_composer')
    cy.get('[data-cy="artist-name"]').should('contain', 'Composer')
  })

  it('should filter artists by letter', () => {
    cy.get('[data-cy="letter-filter"]').should('be.visible')
    cy.selectArtistFilter('letter', 'A')
    cy.get('[data-cy="artist-name"]').should('contain', 'A')
  })

  it('should display no artists for invalid filter', () => {
    cy.selectArtistFilter('search', 'InvalidName')
    cy.get('[data-cy="no-artists-message"]').should('be.visible')
  })
})
