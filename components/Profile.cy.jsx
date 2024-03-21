import React from 'react'
import Profile from './Profile'

describe('<Profile />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Profile />)
  })
})