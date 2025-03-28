import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { GamePage } from '../pages/GamePage.ts';
import { HelpPage } from '../pages/HelpPage.ts';

const GAME_DATA = {
  "Goldrausch": {
        "help_link_text": "Zur Goldrausch Hilfe",
        "help_page_url_part": "/goldrausch",
        "help_page_game_selector_value": "goldrausch",
        "help_page_game_button_url_part": "/goldrausch"
    },
};

  test.describe('LOTTO24 Games Tests', () => {
    test.use({
      viewport: { width: 470, height: 770 },
      ignoreHTTPSErrors: true,
      baseURL: 'https://games.lotto24.de',
    });

  
    Object.keys(GAME_DATA).forEach((gameName) => {
      test(`Should test game for ${gameName}`, async ({ page }) => {
        const homePage = new HomePage(page);
      
        await homePage.goto();
  
        //Verify that the ZEAL Instant Games section
        await expect(homePage.zealInstantGamesTeaser).toBeVisible();

        await page.pause();

        
      });
    });
  });

