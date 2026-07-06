import dev from "../config/environment/dev";
import qa from "../config/environment/qa";
import uat from "../config/environment/uat";


import { ENV } from "./env";

const environments = {
    DEV: dev,
    QA: qa,
    UAT: uat,
};

export const Environment =
    environments[ENV.target as keyof typeof environments] ??
    dev;