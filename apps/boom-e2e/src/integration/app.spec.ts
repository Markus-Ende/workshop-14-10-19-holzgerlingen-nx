import { getGreeting } from '../support/app.po';

describe('boom', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to boom!');
  });
});
