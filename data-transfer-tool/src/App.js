import React, { useState } from 'react';
   import { PublicClientApplication } from '@azure/msal-browser';
   import { msalConfig, loginRequest } from './authConfig';

   const msalInstance = new PublicClientApplication(msalConfig);

   function App() {
     const [accessToken, setAccessToken] = useState(null);

     const handleLogin = async () => {
       try {
         const loginResponse = await msalInstance.loginPopup(loginRequest);
         setAccessToken(loginResponse.accessToken);
         console.log('Login successful:', loginResponse);
       } catch (error) {
         console.error('Login failed:', error);
       }
     };

     const fetchData = async () => {
       if (!accessToken) return;
       try {
         const response = await fetch('http://localhost:5000/api/getEmails', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ accessToken }),
         });
         const data = await response.json();
         console.log('Emails:', data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };

     return (
       <div>
         <h1>Data Transfer Tool</h1>
         <button onClick={handleLogin}>Login with University Account</button>
         <button onClick={fetchData} disabled={!accessToken}>
           Fetch Emails
         </button>
         {/* Add components for data selection and destination choice */}
       </div>
     );
   }

   export default App;