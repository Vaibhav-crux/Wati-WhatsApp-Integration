import axios from 'axios';
import dotenv from 'dotenv';
import { createLogger, format, transports } from 'winston';

// Load environment variables from .env file
dotenv.config();

// Fetch details from environment variables
const access_token = process.env.ACCESS_TOKEN!;
const api_endpoint = process.env.API_ENDPOINT!;

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

// Define the headers with your access token
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${access_token}`
};

// Function to send OTP via WhatsApp
export async function sendWhatsAppMessage(phoneNumber: string, otp: string) {
  const url = `${api_endpoint}/api/v2/sendTemplateMessage?whatsappNumber=${phoneNumber}`;

  const payload = {
    template_name: 'how3_chat', // Ensure this matches the exact template name in WATI
    broadcast_name: 'my_broadcast',
    parameters: [
      {
        name: 'first_name', // This should match the placeholder in your template
        value: otp
      }
    ]
  };

  try {
    const response = await axios.post(url, payload, { headers });
    logger.info('Message sent successfully');
    console.log(response.data);
  } catch (error) {
    logger.error(`Failed to send message: ${error}`);
  }
}

// Function to send Magic Link via WhatsApp
export async function sendWhatsAppMagicLink(phoneNumber: string, magicLinkUrl: string) {
  const url = `${api_endpoint}/api/v2/sendTemplateMessage?whatsappNumber=${phoneNumber}`;

  const payload = {
    template_name: 'how3_chat', // Ensure this matches the exact template name in WATI
    broadcast_name: 'my_broadcast',
    parameters: [
      {
        name: 'first_name', // This should match the placeholder in your template
        value: magicLinkUrl
      }
    ]
  };

  try {
    const response = await axios.post(url, payload, { headers });
    logger.info('Magic link sent successfully');
    console.log(response.data);
  } catch (error) {
    logger.error(`Failed to send magic link: ${error}`);
  }
}
