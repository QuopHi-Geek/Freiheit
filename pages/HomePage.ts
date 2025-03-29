import { Page, Locator } from '@playwright/test';

export class HomePage {
  constructor(public page: Page) {}

  async goto(baseURL: string) {
    await this.page.goto(baseURL);
    await this.acceptCookies();
  }

  async acceptCookies() {
    await this.page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  }

  get zealInstantGamesTeaser(): Locator {
    return this.page.getByRole('link', { name: 'ZEAL Instant Games', exact: true });
  }

  get zealInstantGamesTeaserBanner(): Locator {
    return this.page.locator("(//a[@class='container'])[1]");

  } 

  get zealInstantGamesButton(): Locator {
    return this.page.locator('teaser-product-teaser-games-ui-layout').filter({ hasText: 'ZEAL Instant Games Alle' }).getByRole('button').first();
  }

  get zealInstantGamesNextButton(): Locator {
    return this.page.locator('teaser-product-teaser-games-ui-layout').filter({ hasText: 'ZEAL Instant Games Alle' }).getByRole('button').nth(1);
  }

  async swipeRightInZealTeaser(times: number = 1) {
    const button = this.zealInstantGamesButton;
    const nextButton = this.zealInstantGamesNextButton;
    const zealTeaserBanner = this.zealInstantGamesTeaserBanner;

    await zealTeaserBanner.scrollIntoViewIfNeeded()
    await this.page.waitForTimeout(500);

    await zealTeaserBanner.hover();
    await zealTeaserBanner.focus();

    await button.click();
    await this.page.waitForTimeout(500);
    await nextButton.click();

  }

  async clickGameTeaserByName(gameName: string) {
    const gameTeaser = this.page.locator(`a:has-text("${gameName}")`);
    if (gameTeaser) {
      await gameTeaser.click();
    } else {
      throw new Error(`Game teaser for ${gameName} not found.`);
    }
  }
}