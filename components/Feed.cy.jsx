import React from 'react'
import Feed from './Feed'

describe('<Feed />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Feed />)
  })
})