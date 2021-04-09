import { templateVersion } from '../../package.json';
import { AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  clientId: 'frontend',
  disableAtHashCheck: true,
  issuer: 'https://auth.easyware.io/auth/realms/Platypus',
  oidc: true,
  redirectUri: window.location.origin + '/Home',
  responseType: 'code',
  scope: 'profile email offline_access',
  sessionChecksEnabled: true,
  showDebugInformation: true,
};

export const environment = {
  production: true,
  version: templateVersion,
  oidcConfig: authConfig,
  api: {
    url: 'https://platypus-api.easyware.io/api/v1',
    mail: {
      url: '/mail/',
      unreadMessagesCount: '/messages/unread/count',
    },
  },
};
