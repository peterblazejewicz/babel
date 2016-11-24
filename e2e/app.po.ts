import { browser, element, by } from 'protractor';

export class BabelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('babel-root h1')).getText();
  }
}
