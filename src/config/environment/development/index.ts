import { EnvironmentConfiguration } from 'src/config/environment/environment.type';

export const development: EnvironmentConfiguration = {
  server: { port: parseInt(process.env.APP_PORT, 10) || 7000 },
  jwtSecret: process.env.JWT_SECRET,
  fixerApiBaseUrl: process.env.FIXER_API_BASE_URL,
  fixerApiKey: process.env.FIXER_API_KEY,
  outsourcedTransactionCommissionPercentage:
    parseInt(process.env.OUTSOURCED_TRANSACTION_COMMISSION_PERCENTAGE, 10) || 1,
  baseCurrencyExchangeRateIsoCode:
    process.env.BASE_CURRENCY_EXCHANGE_RATE_ISO_CODE || 'USD',
  exchangeRateUpdateRate:
    parseInt(process.env.EXCHANGE_RATE_UPDATE_RATE, 10) || 1440
};
