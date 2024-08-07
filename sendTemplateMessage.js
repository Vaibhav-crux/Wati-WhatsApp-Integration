const axios = require('axios');
const dotenv = require('dotenv');
const { createLogger, format, transports } = require('winston');

// Load environment variables from .env file
dotenv.config();

// Fetch details from environment variables
const access_token = process.env.ACCESS_TOKEN;
const api_endpoint = process.env.API_ENDPOINT;
const phone_number = process.env.PHONE_NUMBER;

// Set up logging
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});

// Define the API endpoint
const url = `${api_endpoint}/api/v2/sendTemplateMessage?whatsappNumber=${phone_number}`;

// Define the headers with your access token
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${access_token}`
};

// Define the payload with template details
const payload = {
  template_name: 'how3_chat', // Ensure this matches the exact template name in WATI
  broadcast_name: 'my_broadcast',
  parameters: [
    {
      name: 'first_name', // This should match the placeholder in your template
      value: 'Mohit'
    }
  ]
};

// Make the POST request
axios.post(url, payload, { headers })
  .then(response => {
    logger.info('Message sent successfully');
    console.log(response.data);
  })
  .catch(error => {
    logger.error(`Failed to send message: ${error}`);
  });
