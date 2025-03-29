import { test, expect, Page, Locator } from "@playwright/test";

export class GamePage {
  constructor(public page: Page) {}

  async verifyGamePageUrl(gameName: string) {
    const sanitizedGameName = gameName.toLowerCase().replace(/[^a-z0-9]/g, "");
    await expect(this.page).toHaveURL(new RegExp(`/games/${sanitizedGameName}`));
  }

  getHelpLink(gameName: string): Locator {
    return this.page.getByRole("link", { name: `Zur ${gameName} Hilfe` });
  }

  async clickHelpLink(gameName: string) {
    await this.getHelpLink(gameName).click();
  }

  async verifyHelpLink(gameName: string) {
    await expect(this.getHelpLink(gameName)).toBeVisible();
  }
}
