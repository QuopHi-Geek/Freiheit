import { test, expect, Page, Locator } from '@playwright/test';

export class GamePage {
    constructor(public page: Page) {}
  
    async verifyGamePageUrl(gameName: string) {
      await expect(this.page).toHaveURL(new RegExp(`/games/${gameName.toLowerCase().replace(/ /g, '')}`));
    }
  
    getHelpLink(gameName: string): Locator {
      return this.page.getByRole('link', { name: `Zur ${gameName} Hilfe` });
    }
  
    async clickHelpLink(gameName: string) {
      await this.getHelpLink(gameName).click();
    }
  }
  