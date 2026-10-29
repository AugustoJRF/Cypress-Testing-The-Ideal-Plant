# Cypress Testing The Ideal Plant

[![Cypress tests](https://github.com/AugustoJRF/Cypress-Testing-The-Ideal-Plant/actions/workflows/cypress.yml/badge.svg)](https://github.com/AugustoJRF/Cypress-Testing-The-Ideal-Plant/actions/workflows/cypress.yml)

This automation was developed with Cypress to test the website The Ideal Plant.

**Link to the website:** https://augustojrf.github.io/The-Ideal-Plant/

## Main goals

- Verify the content inside the cards, form and container.
- Verify all possible answer scenarios to the questions.
- Ensure the correct behavior of the modal of the recommended plants.

## What is tested?

- The plant cards: image names and titles.
- The content inside the container.
- The content inside the card.
- The content inside the form.
- The radio buttons selection and the click on the submit button.
- The recommended plants modal behavior.
- All possible answer selection scenarios.

**Note:** The tests related to recommended plants should ensure that the plants corresponding to the given answers appear in the modal. However, it is not necessary to verify the text regarding the cultivation tips of these plants. Therefore, the test will be considered successful if the modal opens with the specific plants corresponding to the selected conditions.

## Continuous Integration

The tests run automatically with GitHub Actions on every push and pull request, and can also be triggered manually.

The results of each run, including the logs with every test scenario, are available in the [Actions tab](https://github.com/AugustoJRF/Cypress-Testing-The-Ideal-Plant/actions).
