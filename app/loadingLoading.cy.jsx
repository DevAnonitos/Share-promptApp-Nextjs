import React from 'react'
import Loading from './loading'

describe('<Loading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Loading />);
    cy.get('.w-full.flex-center').should('exist');
    cy.get('img')
      .should('have.attr', 'src', 'assets/icons/loader.svg')
      .and('have.attr', 'alt', 'loader')
      .and('have.attr', 'width', '50')
      .and('have.attr', 'height', '50');
  })
})