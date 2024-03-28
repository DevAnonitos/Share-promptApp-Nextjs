import React from 'react'
import Loading from './loading'

describe('<Loading />', () => {
  it('renders', () => {
    cy.readFile('public/assets/icons/loader.svg', { encoding: 'base64' }).then((svg) => {
      cy.intercept('_next/image*', (req) => {
        req.reply({
          statusCode: 200,
          headers: { 'Content-Type': 'image/svg+xml/png' },
          body: img.buffer,
        });
      });
      cy.mount(<Loading />);
      cy.get('.w-full.flex-center').should('exist');
      cy.get('img')
        .should('have.attr', 'src', 'assets/icons/loader.svg')
        .and('have.attr', 'alt', 'loader')
        .and('have.attr', 'width', '50')
        .and('have.attr', 'height', '50');
    });
  })
})