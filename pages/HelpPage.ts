import { test, expect, Page, Locator } from '@playwright/test';
import { GameData } from '../testdata.ts';


export class HelpPage {
    constructor(public page: Page) {}
  
    async verifyHelpPageUrl(gameName: string) {
      await expect(this.page).toHaveURL(new RegExp(`/help/${gameName.toLowerCase().replace(/ /g, '')}`));
    }
  
    get gameSelector(): Locator {
      return this.page.locator('select#game-selector');
    }
  
    async verifySelectedGameInComboBox(gameData: GameData) {
      await expect(this.gameSelector).toHaveValue(gameData.help_page_game_selector_value);
    }
  
    get backToGameButton(): Locator {
      return this.page.locator('a.btn-primary');
    }
  
    async verifyBackToGameButtonLink(gameData: GameData) {
      await expect(this.backToGameButton).toHaveAttribute('href', new RegExp(gameData.help_page_game_button_url_part));
    }
  }