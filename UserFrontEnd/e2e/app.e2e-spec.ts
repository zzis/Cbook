import { UserFrontEndPage } from './app.po';

describe('user-front-end App', () => {
  let page: UserFrontEndPage;

  beforeEach(() => {
    page = new UserFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
