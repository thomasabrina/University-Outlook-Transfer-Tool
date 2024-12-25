# University Outlook Data Transfer Tool

This project is a web application that allows students to securely log in with their university Outlook accounts and transfer their data (emails, contacts, calendar events) to a chosen destination. The application is built using React for the frontend and Node.js with Express for the backend.

## Features

- **Secure Authentication:** Students can log in using their university credentials via Microsoft OAuth 2.0.
- **Data Selection:** Users can select which data to transfer, including emails, contacts, and calendar events.
- **Flexible Destinations:** Data can be transferred to various destinations such as local storage, another email service, or cloud storage.
- **User-Friendly Interface:** A simple and intuitive interface built with React.

## Technologies Used

- **Frontend:** React, MSAL.js for authentication
- **Backend:** Node.js, Express, Axios
- **API:** Microsoft Graph API for accessing Outlook data

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- An Azure app registration for Microsoft Graph API access

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/university-outlook-transfer-tool.git
   cd university-outlook-transfer-tool
   ```

2. **Install Frontend Dependencies:**

   Navigate to the frontend directory and install dependencies:

   ```bash
   cd data-transfer-tool
   npm install
   ```

3. **Install Backend Dependencies:**

   Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

### Configuration

1. **Frontend Configuration:**

   Update `src/authConfig.js` with your Azure app registration details:

   ```javascript
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
   ```

2. **Backend Configuration:**

   Ensure your backend server is set up to handle requests from the frontend.

### Running the Application

1. **Start the Backend Server:**

   ```bash
   cd backend
   node server.js
   ```

2. **Start the Frontend:**

   ```bash
   cd data-transfer-tool
   npm start
   ```

3. **Access the Application:**

   Open your browser and go to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).