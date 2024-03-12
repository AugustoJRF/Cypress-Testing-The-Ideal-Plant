/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('/')
})

describe('Verify the content of the cards, container and form', () => {

    it('Check "The Ideal Plant" presentation content', () => {

        cy.get('.jumbotron').find('h1').should('contain', 'The Ideal Plant')
        cy.get('.jumbotron').should('contain', 'Each species of plant requires a specific set of conditions to develop in a healthy manner, such as the amount of light and water, for example.')
    })

    it('Check the "How to discover your ideal plant?" presentation content', () => {

        cy.get('.card-header').find('h3').should('contain', 'How to discover your ideal plant?')
        cy.get(':nth-child(2) > .card-body')
            .should('contain', 'The three statements at the end of the page help in selecting which of the 15 presented plants will best fit the environment you have available. If you identify with the condition, mark "Yes", if the condition does not correspond, mark "No".')
            .should('contain', 'After answering the three statements, click on "Check the plants".')
            .should('contain', 'Note: There are several other conditions that directly influence the healthy development of a plant, such as temperature, climate, and soil type')    
    })

    it('Check the 15 plants presentation content', () => {
        
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
                    const $card = $name.closest('.card.bg-light')
                    cy.wrap($card).find(`img[src="${plant.image}"]`).should('be.visible')
                });
        });
    });

    it('Check form content', () => {

        cy.get(':nth-child(8) > .card-body').find('.mb-3')
            .should('contain', '1. The location receives many hours of direct sunlight throughout the day.')
            .should('contain', '2. Limited time available for watering. I can only water the plants a maximum of 3 times per week.')
            .should('contain', '3. The space only allows for plants in hanging pots or vertical gardens.')
        cy.get('.mb-3').each(($question) => {
        cy.wrap($question).find('input[type="radio"]').should('have.length', 2)
            cy.wrap($question).contains('Yes')
            cy.wrap($question).contains('No')
        })
        cy.get(':nth-child(8) > .card-body').find('.btn.btn-success.mt-1.mb-n3')
            .should('exist')
            .should('contain', 'Check the plants')
    })
})

describe('Verify all possible answers combination and results', () => {

    it('The user answers "Yes" to all questions', () => {
        
        cy.clickOnYesQuestion1()
        cy.clickOnYesQuestion2()
        cy.clickOnYesQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Moss Rose')
            .should('contain', 'Asparagus Sprengeri')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Geranium')
    })

    it('The user answers "Yes", "Yes", "No" to the questions', () => {
        
        cy.clickOnYesQuestion1()
        cy.clickOnYesQuestion2()
        cy.clickOnNoQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Dracaena Trifasciata')
            .should('contain', 'Asparagus Sprengeri')
            .should('contain', 'Geranium')
            .should('contain', 'Moss Rose')  
    })

    it('The user answers "Yes", "No", "Yes" to the questions', () => {
       
        cy.clickOnYesQuestion1()
        cy.clickOnNoQuestion2()
        cy.clickOnYesQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Geranium')
            .should('contain', 'Moss Rose')
            .should('contain', 'Asparagus Sprengeri')
    })

    it('The user answers "Yes", "No", "No" to the questions', () => {
        
        cy.clickOnYesQuestion1()
        cy.clickOnNoQuestion2()
        cy.clickOnNoQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Geranium')
            .should('contain', 'Croton')
            .should('contain', 'Rose')
            .should('contain', 'Moss Rose')
            .should('contain', 'Asparagus Sprengeri')
            .should('contain', 'Dracaena Trifasciata')
    })

    it('The user answers "No", "Yes", "Yes" to the questions', () => {
       
        cy.clickOnNoQuestion1()
        cy.clickOnYesQuestion2()
        cy.clickOnYesQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Spider Plant')
            .should('contain', 'Peperomia Scandens')
            .should('contain', 'Golden Pothos')
            .should('contain', 'Plectranthus Incense')
    })

    it('The user answers "No", "Yes", "No" to the questions', () => {
       
        cy.clickOnNoQuestion1()
        cy.clickOnYesQuestion2()
        cy.clickOnNoQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Peperomia Scandens')
            .should('contain', 'Golden Pothos')
            .should('contain', 'Dracaena Trifasciata')
            .should('contain', 'Spider Plant')
            .should('contain', 'Holly')
    })

    it('The user answers "No", "No", "Yes" to the questions', () => {
       
        cy.clickOnNoQuestion1()
        cy.clickOnNoQuestion2()
        cy.clickOnYesQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Spider Plant')
            .should('contain', 'Swedish Ivy')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Golden Pothos')
            .should('contain', 'Peperomia Scandens')
            .should('contain', 'Tradescantia zebrina')
            .should('contain', 'Basket Fern')
    })

    it('The user answers "No" to all questions', () => {
       
        cy.clickOnNoQuestion1()
        cy.clickOnNoQuestion2()
        cy.clickOnNoQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Spider Plant')
            .should('contain', 'Plectranthus Incense')
            .should('contain', 'Hydrangea')
            .should('contain', 'Peperomia Scandens')
            .should('contain', 'Holly')
            .should('contain', 'Tradescantia zebrina')
            .should('contain', 'Dracaena Trifasciata')
            .should('contain', 'Basket Fern')
            .should('contain', 'Swedish Ivy')
            .should('contain', 'Golden Pothos')
    })

    it('The user answers only one question out of three', () => {
        
        cy.clickOnNoQuestion1()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Please, answer all the statements.')
    })

    it('The user answers only two questions out of three', () => {
        
        cy.clickOnNoQuestion2()
        cy.clickOnYesQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults')
            .should('be.visible')
            .should('contain', 'Please, answer all the statements.')
    })
})

describe('Verify if the modal closes properly', () => { 

    it('The user clicks on the "X"', () => { 

        cy.clickOnNoQuestion1()
        cy.clickOnNoQuestion2()
        cy.clickOnNoQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults').should('be.visible')
        cy.wait(300)
        cy.get('.close > span[aria-hidden="true"]').click()
        cy.get('#plantsresults').should('not.be.visible')
    })

    it('The user clicks outside of the modal', () => {

        cy.clickOnNoQuestion1()
        cy.clickOnNoQuestion2()
        cy.clickOnNoQuestion3()
        cy.clickOnCheckThePlantsButton()
        cy.get('#plantsresults').should('be.visible')
        cy.wait(300)
        cy.get('#exampleModal').click({ force: true })
        cy.get('#plantsresults').should('not.be.visible')
    })
})
