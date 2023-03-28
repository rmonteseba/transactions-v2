import { config } from 'dotenv';

config();

import { development } from './environment/development';
import { staging } from './environment/staging';
import { production } from './environment/production';
import { Environments } from './environment/environment.type';

const env = process.env.NODE_ENV;
const environment = { development, staging, production }[env];
if (!environment) throw new Error(`Environment not valid received: ${env}`);

export const configurations = {
  ...environment,
  /** Actual environment in which the application is running */
  env,
  /** If true the app is running locally */
  isDevelopment: env === Environments.DEVELOPMENT,
  /** If true the app is running in a staging environment */
  isStaging: env === Environments.STAGING,
  /** If true the app is running in a deployed environment */
  isProduction: env === Environments.PRODUCTION
};
