export const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID', // Replace with your client ID
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ['User.Read', 'Mail.Read', 'Contacts.Read', 'Calendars.Read'],
};
