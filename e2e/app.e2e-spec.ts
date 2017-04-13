import { NimbleBiPage } from './app.po';

describe('nimble-bi App', () => {
  let page: NimbleBiPage;

  beforeEach(() => {
    page = new NimbleBiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
