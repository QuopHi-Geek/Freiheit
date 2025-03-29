import { test, expect, Page, Locator } from '@playwright/test';
import { GameData } from '../testdata.ts';


export class HelpPage {
    constructor(public page: Page) {}
  
    async verifyHelpPageUrl(gameName: string) {
       const sanitizedGameName = gameName.toLowerCase().replace(/[^a-z0-9]/g, '');
       await expect(this.page).toHaveURL(new RegExp(`/games/${sanitizedGameName}`));
    }
  
    get gameSelector(): Locator {
      return this.page.getByRole('combobox');
    }
  
    backToGameButton(gameName: string): Locator {
      return this.page.getByRole('link', { name: `${gameName} spielen` });
    }

    async verifySelectedGameInComboBox(gameData: GameData) {
      await expect(this.gameSelector).toHaveValue(gameData.help_page_game_selector_value);
    }
  
    async verifyBackToGameButtonLink(gameData: GameData) {
      await expect(this.backToGameButton).toContain(gameData.help_button_display_text);
    }

    async goToGamePageFromHelpPageBackToGameButtonLink(gameName: string) {
      await this.page.getByRole('button', { name: `${gameName} spielen` }).click();
    }
  }