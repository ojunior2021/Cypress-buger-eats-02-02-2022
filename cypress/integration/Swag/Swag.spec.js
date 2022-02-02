/// <reference types="cypress" />

describe('Test de login', () => {

    before(() => {
        cy.visit('https://www.saucedemo.com/')

    })

    beforeEach(() => {
        cy.reload()
    cy.get(".login_password > h4").should('have.text', 'Password for all users:')
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get('input[data-test="login-button"]').click()



    })

it ('Selecionar filtros', () => {
    cy.get('option[value="az"]').should('have.text','Name (A to Z)')
    cy.get('option[value="az"]').should('have.text','Name (A to Z)')
    cy.get('option[value="az"]').should('have.text','Name (A to Z)')
    cy.get('option[value="az"]').should('have.text','Name (A to Z)')
    //cy.get('[data-test="product_sort_container"]').then($el => {
    //expect($el.val()).to.be.deep.equal(['az', 'za', 'lohi', 'hilo'])
    //expect($el.val()).to.have.length(2)

  })
})
