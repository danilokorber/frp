import { templateVersion } from '../../package.json';
import { AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  issuer: 'https://auth.easyware.io/auth/realms/Platypus',
  redirectUri: window.location.origin + '/Home',
  clientId: 'account',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  showDebugInformation: false,
};

export const environment = {
  production: true,
  version: templateVersion,
  oidcConfig: authConfig,
};
