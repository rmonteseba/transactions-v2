export interface EnvironmentConfiguration {
  server: { port: number };
  jwtSecret: string,
}

export enum Environments {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production'
}
