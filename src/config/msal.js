import { ENVIRONMENT, LOGIN_REDIRECT } from './env';

export const tenantId = 'ab37b40e-6cca-4507-b964-ae2129653c16';

// const clientIds = {
//   development: '1d7a9cf7-7281-458a-9d0b-f622622ddb73',
//   test: '1d7a9cf7-7281-458a-9d0b-f622622ddb73',
//   production: 'c8842b05-87b7-47e0-b4fc-e2575ce398de',
// };

const groupIds = {
  development: '9d08a239-73bd-4080-9b1b-8501b0ff06e1',
  test: '9d08a239-73bd-4080-9b1b-8501b0ff06e1',
  production: 'd493dcf4-6d4c-452b-9756-b9f46f3e1d06',
};

export const groupId = groupIds[ENVIRONMENT];

export const msalConfig = {
  auth: {
    clientId: "1d7a9cf7-7281-458a-9d0b-f622622ddb73",
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri: LOGIN_REDIRECT,
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  endpoints: {
    api: `https://graph.windows.net/${tenantId}`,
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read', 'openid', 'email', 'profile', 'Directory.Read.All'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  endpoint: 'https://graph.microsoft.com/v1.0',
};
