import { Locator, Page } from "@playwright/test";
import { Logger } from "../../logger/logger";

export class ElementActions {

    constructor(protected page: Page) {}

    /**
     * Click an element
     */
    async click(locator: Locator): Promise<void> {
        Logger.info("Clicking element");

        await locator.waitFor({
            state: "visible"
        });

        await locator.click();
    }

    /**
     * Fill text field
     */
    async fill(locator: Locator, value: string): Promise<void> {
        Logger.info(`Fill : ${value}`);

        await locator.waitFor({
            state: "visible"
        });

        await locator.fill(value);
    }

    /**
     * Type text slowly
     */
    async type(locator: Locator, value: string): Promise<void> {
        Logger.info(`Typing : ${value}`);

        await locator.waitFor({
            state: "visible"
        });

        await locator.pressSequentially(value);
    }

    /**
     * Clear textbox
     */
    async clear(locator: Locator): Promise<void> {
        Logger.info("Clearing textbox");

        await locator.clear();
    }

    /**
     * Double Click
     */
    async doubleClick(locator: Locator): Promise<void> {
        Logger.info("Double Click");

        await locator.dblclick();
    }

    /**
     * Right Click
     */
    async rightClick(locator: Locator): Promise<void> {
        Logger.info("Right Click");

        await locator.click({
            button: "right"
        });
    }

    /**
     * Hover
     */
    async hover(locator: Locator): Promise<void> {
        Logger.info("Hover");

        await locator.hover();
    }

    /**
     * Check Checkbox
     */
    async check(locator: Locator): Promise<void> {
        Logger.info("Checking Checkbox");

        await locator.check();
    }

    /**
     * Uncheck Checkbox
     */
    async uncheck(locator: Locator): Promise<void> {
        Logger.info("Unchecking Checkbox");

        await locator.uncheck();
    }

    /**
     * Select dropdown by value
     */
    async selectByValue(locator: Locator, value: string): Promise<void> {
        Logger.info(`Selecting : ${value}`);

        await locator.selectOption(value);
    }

    /**
     * Upload File
     */
    async uploadFile(locator: Locator, filePath: string): Promise<void> {
        Logger.info("Uploading File");

        await locator.setInputFiles(filePath);
    }
}