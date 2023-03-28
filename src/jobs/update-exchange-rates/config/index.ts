import { configurations } from '../../../config/app.config';

const { exchangeRateUpdateRate: EXCHANGE_RATE_UPDATE_RATE } = configurations;

export const CRON_PERIODICITY = `0 */${EXCHANGE_RATE_UPDATE_RATE} * * * *`;
