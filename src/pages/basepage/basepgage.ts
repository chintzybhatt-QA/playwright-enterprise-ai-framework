import { expect, Locator, Page } from "@playwright/test";
import { Logger } from "../../logger/logger";

export class BasePage {

    constructor(protected page: Page) {}

    /* ---------------------------------------------------------- */
    /* Navigation */
    /* ---------------------------------------------------------- */

    async goto(url: string): Promise<void> {
        Logger.info(`Navigating to ${url}`);
        await this.page.goto(url);
    }

    async reload(): Promise<void> {
        Logger.info("Reloading page");
        await this.page.reload();
    }

    async goBack(): Promise<void> {
        Logger.info("Navigating Back");
        await this.page.goBack();
    }

    /* ---------------------------------------------------------- */
    /* Waits */
    /* ---------------------------------------------------------- */

    async waitForNetworkIdle() {
        await this.page.waitForLoadState("networkidle");
    }

    async waitForDomLoaded() {
        await this.page.waitForLoadState("domcontentloaded");
    }

    async waitForPageLoaded() {
        await this.page.waitForLoadState("load");
    }

    async waitForURL(url: string | RegExp) {
        await this.page.waitForURL(url);
    }

    async waitForVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async waitForHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    /* ---------------------------------------------------------- */
    /* Element Actions */
    /* ---------------------------------------------------------- */

    async click(locator: Locator) {
        Logger.info(`Clicking element`);
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        Logger.info(`Filling "${value}"`);
        await locator.waitFor({ state: "visible" });
        await locator.fill(value);
    }

    async clear(locator: Locator) {
        Logger.info(`Clearing field`);
        await locator.clear();
    }

    async type(locator: Locator, value: string) {
        Logger.info(`Typing "${value}"`);
        await locator.waitFor({ state: "visible" });
        await locator.pressSequentially(value);
    }

    async hover(locator: Locator) {
        Logger.info(`Hovering element`);
        await locator.hover();
    }

    async doubleClick(locator: Locator) {
        Logger.info(`Double clicking`);
        await locator.dblclick();
    }

    async rightClick(locator: Locator) {
        Logger.info(`Right clicking`);
        await locator.click({ button: "right" });
    }

    /* ---------------------------------------------------------- */
    /* Dropdowns */
    /* ---------------------------------------------------------- */

    async selectByValue(locator: Locator, value: string) {
        Logger.info(`Selecting value ${value}`);
        await locator.selectOption(value);
    }

    async selectByLabel(locator: Locator, label: string) {
        Logger.info(`Selecting ${label}`);
        await locator.selectOption({ label });
    }

    /* ---------------------------------------------------------- */
    /* Checkbox */
    /* ---------------------------------------------------------- */

    async check(locator: Locator) {
        Logger.info(`Checking checkbox`);
        await locator.check();
    }

    async uncheck(locator: Locator) {
        Logger.info(`Unchecking checkbox`);
        await locator.uncheck();
    }

    /* ---------------------------------------------------------- */
    /* Keyboard */
    /* ---------------------------------------------------------- */

    async press(locator: Locator, key: string) {
        Logger.info(`Pressing ${key}`);
        await locator.press(key);
    }

    /* ---------------------------------------------------------- */
    /* Scrolling */
    /* ---------------------------------------------------------- */

    async scrollIntoView(locator: Locator) {
        Logger.info(`Scrolling to element`);
        await locator.scrollIntoViewIfNeeded();
    }

    /* ---------------------------------------------------------- */
    /* Information */
    /* ---------------------------------------------------------- */

    async getText(locator: Locator): Promise<string> {
        return (await locator.textContent()) ?? "";
    }

    async getValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async isEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    /* ---------------------------------------------------------- */
    /* Assertions */
    /* ---------------------------------------------------------- */

    async verifyText(locator: Locator, expected: string) {
        await expect(locator).toHaveText(expected);
    }

    async verifyContainsText(locator: Locator, expected: string) {
        await expect(locator).toContainText(expected);
    }

    async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async verifyURL(expected: string | RegExp) {
        await expect(this.page).toHaveURL(expected);
    }

    /* ---------------------------------------------------------- */
    /* Screenshots */
    /* ---------------------------------------------------------- */

    async takeScreenshot(name: string) {
        Logger.info(`Capturing Screenshot : ${name}`);
        await this.page.screenshot({
            path: `reports/screenshots/${name}.png`,
            fullPage: true
        });
    }

}