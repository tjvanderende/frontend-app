/// <reference types="cypress" />

describe('Firestarter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it('has a heading', () => {

        cy.contains('Welcome to CypressTest!');
        // or...
        cy.get('h1').should('contain', 'Welcome to CypressTest!');

    });

});