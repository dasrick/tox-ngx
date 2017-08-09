import { browser, element, by } from 'protractor';

export class ToxNgxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tox-root h1')).getText();
  }
}
