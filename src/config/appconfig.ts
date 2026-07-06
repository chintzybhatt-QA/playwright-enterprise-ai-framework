import { ENV } from "./env";
import { Environment } from "../config/environment";

export const Config = {

    environment: Environment.name,
    baseURL: Environment.baseURL,
    timeout: Environment.timeout,
    retries: Environment.retries,
    browser: ENV.browser,
    headless: ENV.headless,
    username: ENV.username,
    password: ENV.password,

};