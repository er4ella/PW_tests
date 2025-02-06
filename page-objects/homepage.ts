import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly inputDocSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputDocSearch = this.page.locator('.DocSearch-Input')
  }

  async clickSearchPlaceholder() {
    await this.page.locator('.DocSearch-Button-Placeholder').click();
  }

}