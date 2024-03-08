/// <reference types="cypress"/>

//beforeEach(() => {
//    cy.visit('/')
//})

describe('Verify the content of the cards, container and form', () => {

    it('Check "The Ideal Plant" presentation content', () => {

        cy.visit('/')
        cy.get('.jumbotron').find('h1').should('contain', 'The Ideal Plant')
        cy.get('.jumbotron').should('contain', 'Each species of plant requires a specific set of conditions to develop in a healthy manner, such as the amount of light and water, for example.')
    })

    it('Check the "How to discover your ideal plant?" presentation content', () => {

        cy.visit('/')
        cy.get('.card-header').find('h3').should('contain', 'How to discover your ideal plant?')
        cy.get(':nth-child(2) > .card-body')
            .should('contain', 'The three statements at the end of the page help in selecting which of the 15 presented plants will best fit the environment you have available. If you identify with the condition, mark "Yes", if the condition does not correspond, mark "No".')
            .should('contain', 'After answering the three statements, click on "Check the plants".')
            .should('contain', 'Note: There are several other conditions that directly influence the healthy development of a plant, such as temperature, climate, and soil type')    
    })

    it('Check the 15 plants presentation content', () => {
        
        cy.visit('/');
        const cardPlants = [
            { name: 'Spider Plant', image: 'Plants images/clorofito.png' },
            { name: 'Plectranthus Incense', image: 'Plants images/falsa hortela.png' },
            { name: 'Geranium', image: 'Plants images/geranio.png' },
            { name: 'Hydrangea', image: 'Plants images/hortensia.png' },
            { name: 'Peperomia Scandens', image: 'Plants images/peperomia.png' },
            { name: 'Croton', image: 'Plants images/croton.png' },
            { name: 'Rose', image: 'Plants images/roseira.png' },
            { name: 'Holly', image: 'Plants images/azevinho.png' },
            { name: 'Tradescantia Zebrina', image: 'Plants images/lambari.png' },
            { name: 'Moss Rose', image: 'Plants images/onzehoras.png' },
            { name: 'Swedish Ivy', image: 'Plants images/dolar.png' },
            { name: 'Asparagus Sprengeri', image: 'Plants images/aspargo.png' },
            { name: 'Dracaena Trifasciata', image: 'Plants images/espada.png' },
            { name: 'Golden Pothos', image: 'Plants images/jiboia.png' },
            { name: 'Basket Fern', image: 'Plants images/jamaica.png' }
        ];

        cardPlants.forEach(plant => {
            cy.get('.card.bg-light')
                .contains('.card-text', plant.name)
                .should('exist')
                .then(($name) => {
                    const $card = $name.closest('.card.bg-light');
                    cy.wrap($card)
                        .find(`img[src="${plant.image}"]`)
                        .should('be.visible');
                });
        });
    });

    it('Check form content', () => {

        cy.visit('/')
    
    })
})

describe('Verify all possible answers combination', () => {

    it('The user answers "Yes" to all questions', () => {
        cy.visit('/')
      
    })

    it('The user answers "Yes", "Yes", "No" to the questions', () => {
        cy.visit('/')
        
    })

    it('The user answers "Yes", "No", "Yes" to the questions', () => {
        cy.visit('/')
    
    })

    it('The user answers "Yes", "No", "No" to the questions', () => {
        cy.visit('/')
    
    })

    it('The user answers "No", "Yes", "Yes" to the questions', () => {
        cy.visit('/')
    
    })

    it('The user answers "No", "Yes", "No" to the questions', () => {
        cy.visit('/')
    
    })

    it('The user answers "No", "No", "Yes" to the questions', () => {
        cy.visit('/')
    
    })

    it('The user answers "No" to all questions', () => {
        cy.visit('/')
    
    })

    it('The user answers only one question out of three', () => {
        cy.visit('/')
        
    })

    it('The user answers only two questions out of three', () => {
        cy.visit('/')
        
    })
})