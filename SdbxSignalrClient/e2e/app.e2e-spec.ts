import { SdbxSignalrClientPage } from './app.po';

describe('sdbx-signalr-client App', function() {
  let page: SdbxSignalrClientPage;

  beforeEach(() => {
    page = new SdbxSignalrClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
