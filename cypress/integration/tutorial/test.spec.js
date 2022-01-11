/// <reference types="cypress" />

describe('Web driver University tests', () => {

    it('Contact us form test', () => {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Kasia');
        cy.get('[name="last_name"]').type('Klu');
        cy.get('[name="email"]').type('Kasia@gmail.com');
        cy.get('[name="message"]').type('Kasia@gmail.com');
        cy.get('[type="submit"]').click()

        cy.contains('Thank You for your Message!').should('be.visible');
        
    })

    it('negative path', () => {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Kasia');
        cy.get('[name="last_name"]').type('Klu');
        cy.get('[name="email"]').type('Kasia@gmail.com');
        cy.get('[type="submit"]').click()

        cy.contains('Error: all fields are required').should('be.visible');
        
    })
})