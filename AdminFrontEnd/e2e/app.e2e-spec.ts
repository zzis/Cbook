import { AdminFrontEndPage } from './app.po';

describe('admin-front-end App', () => {
  let page: AdminFrontEndPage;

  beforeEach(() => {
    page = new AdminFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
