export interface EnvironmentConfiguration {
  server: { port: number };
  jwtSecret: string;

  fixerApiBaseUrl: string;
  fixerApiKey: string;
  outsourcedTransactionCommissionPercentage: number;

  baseCurrencyExchangeRateIsoCode: string;

  exchangeRateUpdateRate: number;
}

export enum Environments {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production'
}
