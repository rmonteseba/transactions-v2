import { configurations } from '../../config/app.config';
const { fixerApiKey, fixerApiBaseUrl } = configurations;

export const FIXER_API_KEY = fixerApiKey;
export const FIXER_API_LATEST_API = `${fixerApiBaseUrl}/latest`;

export const FIXER_API_LATEST_API_SYMBOLS_DIVIDER = ',';
