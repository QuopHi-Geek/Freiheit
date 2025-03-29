import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { GamePage } from '../pages/GamePage.ts';
import { HelpPage } from '../pages/HelpPage.ts';
import GAME_DATA from '../testdata.ts';


test.describe.configure({ mode: 'parallel' });
const baseURL = 'https://games.lotto24.de';


  test.describe('LOTTO24 Games Tests', () => {
    test.use({
      viewport: { width: 470, height: 770 },
      ignoreHTTPSErrors: true,
      baseURL,
    });

  
    Object.keys(GAME_DATA).forEach((gameName) => {
      test(`should test game flow for ${gameName}`, async ({ page }) => {
        const gameData = GAME_DATA[gameName];
        const homePage = new HomePage(page);
        const gamePage = new GamePage(page);
        const helpPage = new HelpPage(page);

        await homePage.goto(baseURL);
  
        //Verify that the “ZEAL Instant Games” teaser section
        await expect(homePage.zealInstantGamesTeaser).toBeVisible();
       
        await homePage.swipeRightInZealTeaser(2);

        //Click and select game by name
        await homePage.clickGameTeaserByName(gameName);
  
        //Verify that the correct game page is opened / loaded
         await gamePage.verifyGamePageUrl(gameName);

        //Verify and click helpLink
        await gamePage.clickHelpLink(gameName);

         //Verify that the correct help page is opened / loaded
         await helpPage.verifyHelpPageUrl(gameName);

         //Verify that the correct game selected in combobox
         await helpPage.verifySelectedGameInComboBox(gameData);

         //Verify back to Game button
         await helpPage.verifyBackToGameButtonLink(gameData); 

         //click an access game from help page link 
         await helpPage.goToGamePageFromHelpPageBackToGameButtonLink(gameName);
         
         //Verify that the correct game page loaded
         await gamePage.verifyGamePageUrl(gameName);
    
         await page.close();
  
      });
    });
  });
