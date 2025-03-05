/// <reference types="cypress" />

Cypress.Commands.add(
  'selectArtistFilter',
  (filterType: string, value: string) => {
    cy.get(`[data-cy="${filterType}-filter"]`).click() // Open the filter dropdown
    cy.get(`[data-cy="${value}-option"]`).click() // Select the option
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
