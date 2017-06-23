import { AvengersPage } from './app.po';

describe('avengers App', () => {
  let page: AvengersPage;

  beforeEach(() => {
    page = new AvengersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
