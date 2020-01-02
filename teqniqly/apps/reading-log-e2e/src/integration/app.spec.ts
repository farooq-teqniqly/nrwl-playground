import { getReadingLogs, getAddReadingLogButton } from '../support/app.po';

describe('ReadingLogApp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display reading logs', () => {
    // Custom command example, see `../support/commands.ts` file
    //cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    //getGreeting().contains('Welcome to reading-log!');

    getReadingLogs().should(l => expect(l.length).equal(2));
    getAddReadingLogButton().click();
    getReadingLogs().should(l => expect(l.length).equal(3));
  });
});
