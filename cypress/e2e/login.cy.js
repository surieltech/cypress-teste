//to login in a site and search for the word 'Products'

describe('Login', () => {
    //funcao para rodar antes de todo teste
    beforeEach(() => {
        // todos os comandos de cypress tem o cy na frente
        cy.visit('https://www.saucedemo.com')
    })

    //todos os passos da receita vem aqui
    it('entra com o usuário e senha e checa produto', () => {
        // precisa do get para achar o elemento e mexer nele
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        //should = coracao do teste: confere se aconteceu o que deveria
        cy.contains('Products').should('be.visible')
    })

    it('mostra erro para usuário bloqueado', () => {
        //pegando o componente pelo data-test ao inves do id
       cy.get('[data-test="username"]').type('locked_out_user')
       cy.get('[data-test="password"]').type('secret_sauce')
       cy.get('[data-test="login-button"]').click()
       //para esse teste deve aparecer uma mensagem de erro
       cy.get('[data-test="error"]').should('contain', 'locked out')
    })
})