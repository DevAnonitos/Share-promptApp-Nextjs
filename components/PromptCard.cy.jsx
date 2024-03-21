import React from 'react'
import PromptCard from './PromptCard'

describe('<PromptCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PromptCard />)
  })
})