import { test, expect, Page, Locator } from '@playwright/test';

export class GamePage {
    constructor(public page: Page) {}
  
    async verifyGamePageUrl(gameName: string) {
      await expect(this.page).toHaveURL(new RegExp(`/games/${gameName.toLowerCase()}`));
    }
  
    getHelpLink(gameName: string): Locator {
      const gameData = GAME_DATA[gameName];
      return this.page.locator(`a:has-text("${gameData.help_link_text}")`);
    }
  
    async clickHelpLink(gameName: string) {
      await this.getHelpLink(gameName).click();
    }
  }
  