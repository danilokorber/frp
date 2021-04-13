import { templateVersion } from '../../package.json';
import { AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  clientId: 'frontend',
  disableAtHashCheck: true,
  issuer: 'https://auth.easyware.io/auth/realms/Platypus',
  oidc: true,
  redirectUri: window.location.origin + '/Login-Success',
  responseType: 'code',
  scope: 'profile email roles',
  sessionChecksEnabled: true,
  showDebugInformation: true,
};

export const environment = {
  production: false,
  version: templateVersion,
  oidcConfig: authConfig,
  api: {
    url: 'http://localhost:8080/api/v1',
    mail: {
      url: '/mail/',
      messages: '/messages',
      unreadMessagesCount: '/messages/unread/count',
    },
  },
};
