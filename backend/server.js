const express = require('express');
   const axios = require('axios');
   const cors = require('cors');

   const app = express();
   app.use(cors());
   app.use(express.json());

   app.post('/api/getEmails', async (req, res) => {
     const { accessToken } = req.body;
     try {
       const response = await axios.get('https://graph.microsoft.com/v1.0/me/messages', {
         headers: { Authorization: `Bearer ${accessToken}` },
       });
       res.json(response.data);
     } catch (error) {
       res.status(500).json({ error: 'Failed to fetch emails' });
     }
   });

   // Add more endpoints for contacts, calendar, and data transfer

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));