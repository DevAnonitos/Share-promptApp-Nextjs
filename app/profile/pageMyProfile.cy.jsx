import React from 'react'
import MyProfile from './page'

describe('<MyProfile />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyProfile />)
  })
})