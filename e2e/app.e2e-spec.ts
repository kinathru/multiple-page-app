import { MultiplePageAppPage } from './app.po';

describe('multiple-page-app App', function() {
  let page: MultiplePageAppPage;

  beforeEach(() => {
    page = new MultiplePageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
