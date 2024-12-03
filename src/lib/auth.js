import AbstractLib from './abstract';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, graphConfig } from '../config/msal';

export const msalInstance = new PublicClientApplication(msalConfig);
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

export const getFormattedName = (email) => {
  const name = email.split('@');
  if (!name) return email;
  return name[0];
};

export const acquireAccessToken = async () => {
  const accessTokenRequest = {
    scopes: ['user.read', 'openid', 'profile', 'email', 'Directory.Read.All'],
  };
  let authResult;
  try {
    authResult = await msalInstance.acquireTokenSilent(accessTokenRequest);
  } catch (err) {
    authResult = await msalInstance.acquireTokenPopup(accessTokenRequest);
  }
  return authResult.accessToken;
};

export const callGraphApi = async (reqUrl, options = {}) => {
  const token = await acquireAccessToken();
  const response = await fetch(reqUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...options,
    },
  });
  return response;
};

export class Auth extends AbstractLib {
  constructor() {
    super();
    this.user = msalInstance.getActiveAccount();
  }

  getUser = () => this.user;

  getUserName = () => (this.user ? this.user.username : null);

  getName = () => (this.user ? this.user.name : null);




  getUsersByEmail = async (email) => {
    try {
      const reqUrl = `${graphConfig.endpoint}/users?$search="mail:${email}"&$orderby=displayName&$count=true&$select=id,displayName,givenName,surname,mail,jobTitle,mobilePhone,businessPhones,department`;
      const response = await callGraphApi(reqUrl, { ConsistencyLevel: 'eventual' });
      return await response.json().then((res) => res);
    } catch (er) {
      console.error(er);
      return null;
    }
  };
  

  getUserPersonName = () => {
    try {
      if (!this.user) return 'Unknown User';
      const { name } = this.user;
      return `${name.substr(name.indexOf(',') + 1)} ${name.substring(0, name.indexOf(','))}`.trim();
    } catch (er) {
      console.error('Could not get person name', er);
      return null;
    }
  };

  getUserEmail = () => {
    try {
      if (!this.user) return 'Unknown User';
      const { username } = this.user;
      return username;
    } catch (er) {
      console.error('Could not get person email', er);
      return null;
    }
  };

  getUserRoles = () => {
    return this.user && this.user.idTokenClaims ? this.user.idTokenClaims.roles : null;
  };

  userInRole = (role) => {
    if (!this.user) return false;
    const { roles } = this.user.idTokenClaims;
    if (Array.isArray(roles)) {
      return !!roles.filter((r) => roles.includes(r)).length;
    }
    return roles.includes(role);
  };

  
}

const UserAuth = new Auth()

export default UserAuth;
