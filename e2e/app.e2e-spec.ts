import { ToxNgxPage } from './app.po';

describe('tox-ngx App', () => {
  let page: ToxNgxPage;

  beforeEach(() => {
    page = new ToxNgxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('tox works!');
  });
});
