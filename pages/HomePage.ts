import { Page, Locator } from '@playwright/test';

export class HomePage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('https://games.lotto24.de');
    await this.acceptCookies();
  }

  async acceptCookies() {
    await this.page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  }

  get zealInstantGamesTeaser(): Locator {
    return this.page.locator('section:has-text("ZEAL Instant Games")');
  }

  get zealInstantGamesSwiper(): Locator {
    return this.zealInstantGamesTeaser.locator('.swiper-wrapper');
  }

  async swipeRightInZealTeaser(times: number = 1) {
    const swiper = this.zealInstantGamesSwiper;
    for (let i = 0; i < times; i++) {
      await swiper.evaluate((node) => {
        const swiperInstance = node.swiper;
        if (swiperInstance) {
          swiperInstance.slideNext();
        } else {
          node.scrollBy(300, 0);
        }
      });
      await this.page.waitForTimeout(500); // Wait for the swipe animation to complete
    }
  }

  async getFirstGameTeaser(): Promise<Locator> {
    return this.zealInstantGamesTeaser.locator('.swiper-slide:not(.swiper-slide-duplicate) a').first();
  }

  async getGameTeaserByName(gameName: string): Promise<Locator | null> {
    const allTeasers = this.zealInstantGamesTeaser.locator('.swiper-slide:not(.swiper-slide-duplicate) a');
    const count = await allTeasers.count();
    for (let i = 0; i < count; i++) {
      const teaser = allTeasers.nth(i);
      const gameNameInTeaser = await teaser.locator('h3').textContent();
      if (gameNameInTeaser?.trim() === gameName) {
        return teaser;
      }
    }
    return null;
  }

  async clickFirstGameTeaser() {
    const firstGameTeaser = await this.getFirstGameTeaser();
    await firstGameTeaser.click();
  }

  async clickGameTeaserByName(gameName: string) {
    const gameTeaser = await this.getGameTeaserByName(gameName);
    if (gameTeaser) {
      await gameTeaser.click();
    } else {
      throw new Error(`Game teaser for ${gameName} not found.`);
    }
  }
}