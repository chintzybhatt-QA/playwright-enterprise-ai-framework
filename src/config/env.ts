import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    target: process.env.TARGET_ENV ?? "DEV",

    browser: process.env.BROWSER ?? "chromium",

    headless: process.env.HEADLESS === "true",

    username: process.env.USERNAME ?? "",

    password: process.env.PASSWORD ?? "",
};