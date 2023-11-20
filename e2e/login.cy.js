const { contains } = require("cypress/types/jquery")

describe('Login', () => {

    it('Login com sucesso', ()=> {
        
        // get() - selecionar elementos
        cy.visit('/')
            .get('.header-logo')


        // contains() - para encontrar elementos por texto
        // geralemente diminuimos o escopo com um get()
        cy.get('#top-header')
            .contains('Login')


        // find()
        cy.get('#top_header')
            .find('.fa-user')

        // as() - alias



    })
})