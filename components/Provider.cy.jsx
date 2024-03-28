import React from 'react'
import Provider from './Provider'
import { SessionProvider } from 'next-auth/react';

describe('<Provider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Provider />)
  })
})