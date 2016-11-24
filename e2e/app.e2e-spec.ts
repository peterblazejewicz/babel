import { BabelPage } from './app.po';

describe('babel App', function() {
  let page: BabelPage;

  beforeEach(() => {
    page = new BabelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('babel works!');
  });
});
