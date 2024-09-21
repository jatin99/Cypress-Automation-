/// <reference types="cypress" />

/*
Mocha
function (){

}

()=>{
    
    }
*/

describe(" Login Feature",function (){// test suite

    it("Login Test ", ()=>{
        cy.visit("http://phoenix.techwithjatin.com");
        cy.get('.fuse-mat-button-large').should('be.visible').click();
        cy.url().should("include","frontdesk/dashboard")
    })

    it("Login via Supervisor ", ()=>{
        cy.visit("http://phoenix.techwithjatin.com");
        cy.get('#username').should("be.visible").clear()
        cy.get('#username').should("be.visible").type("iamsup1")

        cy.get('#password').should("be.visible").clear()
        cy.get('#password').should("be.visible").type("password")
        cy.get('.fuse-mat-button-large').should('be.visible').click();
        cy.url().should("include","supervisor/dashboard")


    })
})
