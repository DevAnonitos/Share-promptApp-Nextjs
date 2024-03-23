import React from 'react'
import UpdatePrompt from './page'

describe('<UpdatePrompt />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UpdatePrompt />)
  })
})