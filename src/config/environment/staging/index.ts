import { EnvironmentConfiguration } from 'src/config/environment/environment.type';

export const staging: EnvironmentConfiguration = {
  server: { port: parseInt(process.env.APP_PORT, 10) || 7000 },
  jwtSecret: process.env.JWT_SECRET
};
