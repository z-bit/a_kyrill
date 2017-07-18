import { KyrillPage } from './app.po';

describe('kyrill App', () => {
  let page: KyrillPage;

  beforeEach(() => {
    page = new KyrillPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
