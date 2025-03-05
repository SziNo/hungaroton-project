// Load Cypress types
/// <reference types="cypress" />

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
