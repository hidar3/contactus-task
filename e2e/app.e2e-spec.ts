import { ContactusPage } from './app.po';

describe('contactus App', () => {
  let page: ContactusPage;

  beforeEach(() => {
    page = new ContactusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
