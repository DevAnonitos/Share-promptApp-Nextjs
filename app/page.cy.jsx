import React from 'react'
import page from './page'

describe('<page />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<page />)
  })
})