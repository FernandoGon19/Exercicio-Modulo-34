/// <reference types="cypress" />

describe('Testes', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste para o delete', () => {


        cy.get('.sc-gueYoa > .delete').click({ multiple: true })

        cy.get('.sc-iAEyYk > div').should('have.length', 1)


    }),


    it('Teste para a  inclusao', () => {
       cy.get('[type="text"]').type('Fernando')
       cy.get('[type="email"]').type('Fernando@gmail.com')
       cy.get('[type="tel"]').type('12981116853')

       cy.get('.adicionar').first().click()

       cy.get('.sc-iAEyYk').contains('Fernando')

       cy.get('[type="text"]').type('Gabriel')
       cy.get('[type="email"]').type('Gabriel@gmail.com')
       cy.get('[type="tel"]').type('12981116853')

       cy.get('.adicionar').first().click()

       cy.get('.sc-iAEyYk').contains('Gabriel')

       cy.get('[type="text"]').type('Luiz')
       cy.get('[type="email"]').type('Luiz@gmail.com')
       cy.get('[type="tel"]').type('12981116853')

       cy.get('.adicionar').first().click()

       cy.get('.sc-iAEyYk').contains('Luiz')
    }),

    it('Teste para alteração', () => {
        cy.get('.sc-gueYoa > .edit').first().click()

        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()

        cy.get('[type="text"]').type('Rafael')
        cy.get('[type="email"]').type('Rafael@gmail.com')
        cy.get('[type="tel"]').type('1297336693')

        cy.get('.alterar').first().click()

        cy.get('.sc-iAEyYk').contains('Rafael')
    })

    
    
})