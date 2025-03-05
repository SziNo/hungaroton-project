/// <reference types="cypress" />

Cypress.Commands.add(
  'selectArtistFilter',
  (filterType: string, value: string) => {
    cy.get(`[data-cy="${filterType}-filter"]`).click()
    cy.get(`[data-cy="${value}-option"]`).click()
  }
)

Cypress.Commands.add('mockApiError', () => {
  cy.intercept('GET', 'https://exam.api.fotex.net/api/artists', {
    statusCode: 500,
    body: { error: 'Internal Server Error', isError: true },
  })
})

Cypress.Commands.add('mockApiSuccess', (fixture: string) => {
  cy.fixture(fixture).then((mockData) => {
    cy.intercept('GET', 'https://exam.api.fotex.net/api/artists', {
      statusCode: 200,
      body: mockData,
    })
  })
})

declare namespace Cypress {
  interface Chainable {
    /**
     * Selects a filter in the ArtistList component.
     * @param filterType - The type of filter (e.g., "search", "type", "letter").
     * @param value - The value to select (e.g., "Szabo", "Composer", "A").
     * @example cy.selectArtistFilter('search', 'Szabo')
     */
    selectArtistFilter(filterType: string, value: string): Chainable<void>

    /**
     * Simulates an API error for the artists endpoint.
     * @example cy.mockApiError()
     */
    mockApiError(): Chainable<void>

    /**
     * Mocks a successful API response for the artists endpoint.
     * @param fixture - The name of the fixture file to use (e.g., "mockArtists.json").
     * @example cy.mockApiSuccess('mockArtists.json')
     */
    mockApiSuccess(fixture: string): Chainable<void>
  }
}
