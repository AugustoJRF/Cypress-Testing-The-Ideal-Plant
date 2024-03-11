Cypress.Commands.add('clickOnYesQuestion1', () => {
    cy.get('.form-group > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()
    });

Cypress.Commands.add('clickOnYesQuestion2', () => {
    cy.get('.form-group > :nth-child(2) > :nth-child(2) > :nth-child(1)').click()
    });

Cypress.Commands.add('clickOnYesQuestion3', () => {
    cy.get('.form-group > :nth-child(3) > :nth-child(2) > :nth-child(1)').click()
    });

Cypress.Commands.add('clickOnNoQuestion1', () => {
    cy.get('.form-group > :nth-child(1) > :nth-child(2) > :nth-child(2)').click()
    });

Cypress.Commands.add('clickOnNoQuestion2', () => {
    cy.get('.form-group > :nth-child(2) > :nth-child(2) > :nth-child(2)').click()
    });

Cypress.Commands.add('clickOnNoQuestion3', () => {
    cy.get('.form-group > :nth-child(3) > :nth-child(2) > :nth-child(2)').click()
    });

Cypress.Commands.add('clickOnCheckThePlantsButton', () => {
    cy.get('.btn.btn-success.mt-1.mb-n3').click()
    });