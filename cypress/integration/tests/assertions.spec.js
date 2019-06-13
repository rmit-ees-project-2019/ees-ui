context('Assertions', () => {
  beforeEach(() => {
    // cy.visit(Cypress.env('baseUrl'))
    cy.visit('http://43.240.97.67')
    cy.wait(2000)
  })

  describe('On load, ensure all the elements appear on the screen', function() {
    it("Assert the side menu is visible", () => {
      cy.log('todo: incomplete')
      // todo !(display:none)
      // cy.get('map-sidebar-container').
    })

    it("Assert the side menu's contents", () => {
      cy.get('h5').should('contain', 'Emergency Evacuation Simulator')
    })


    it("Assert the map style's contents", () => {
      cy.get('card-header:first-of-type').should('contain', 'Map Style')
    })
  })

})
