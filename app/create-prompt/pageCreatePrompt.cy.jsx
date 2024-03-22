import React from 'react'
import CreatePrompt from './page'

describe('<CreatePrompt />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreatePrompt />)
  })
})