import { NgMePage } from './app.po';

describe('ng-me App', () => {
  let page: NgMePage;

  beforeEach(() => {
    page = new NgMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
