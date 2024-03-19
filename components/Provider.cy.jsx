import React from 'react'
import Provider from './Provider'

describe('<Provider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Provider />)
  })
})