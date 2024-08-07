import prisma from '../config/db';
import otpGenerator from 'otp-generator';
import { sendWhatsAppMessage, sendWhatsAppMagicLink } from './whatsappService';

class UserService {
  public async createUserWithPhoneNumber(phoneNumber: string): Promise<any> {
    try {
      // Generate a 6-digit numeric OTP
      const otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

      const otpVerification = await prisma.otpVerification.create({
        data: {
          user: {
            connectOrCreate: {
              where: { phoneNumber },
              create: { 
                phoneNumber, 
                signUpMethod: 'PHONE', 
                name: 'New User', // Placeholder name
                email: null, // Assuming email is optional, otherwise provide a placeholder or handle accordingly
                createdAt: new Date(), // Set default values for other required fields if necessary
                phoneVerified: false, // Assuming phoneVerified should default to false
                avatar: null,
                instagramUrl: null,
                twitterUrl: null,
                metamaskAddress: null,
                discordUrl: null,
                totalXp: null,
                typeofInvestor: null,
                goalOfInvestor: null,
                userCharacter: null,
                userDevice: null,
                lastSignedAt: null,
                location: null,
                referralCode: null,
                referredBy: null,
                sessionToken: null,
                accessToken: null
              },
            },
          },
          otp,
          isUsed: false,
          expiresAt: new Date(Date.now() + 15 * 60 * 1000), // OTP valid for 15 minutes
        },
      });

      // Send OTP via WhatsApp
      await sendWhatsAppMessage(phoneNumber, otp);

      return otpVerification;
    } catch (error) {
      console.error('Error creating user with phone number:', error);
      throw new Error('Failed to create user with phone number');
    }
  }

  public async verifyOtpAndCreateUser(phoneNumber: string, otp: string): Promise<any> {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        const otpVerification = await prisma.otpVerification.findFirst({
          where: {
            user: { phoneNumber },
            otp,
            isUsed: false,
            expiresAt: { gte: new Date() },
          },
        });

        if (!otpVerification) {
          throw new Error('Invalid or expired OTP');
        }

        const user = await prisma.user.update({
          where: { phoneNumber },
          data: { phoneVerified: true },
        });

        await prisma.otpVerification.update({
          where: { id: otpVerification.id },
          data: { isUsed: true },
        });

        return user;
      });

      return result;
    } catch (error) {
      console.error('Error verifying OTP and creating user:', error);
      throw new Error('Failed to verify OTP and create user');
    }
  }

  public async createMagicLink(phoneNumber: string): Promise<any> {
    try {
      // Generate an 8-character alphanumeric code
      const magicLinkCode = otpGenerator.generate(8, { digits: true, upperCaseAlphabets: true, specialChars: false, lowerCaseAlphabets: false });

      const magicLink = await prisma.magicLink.create({
        data: {
          user: {
            connectOrCreate: {
              where: { phoneNumber },
              create: { 
                phoneNumber, 
                signUpMethod: 'PHONE', 
                name: 'New User', // Placeholder name
                email: null, // Assuming email is optional, otherwise provide a placeholder or handle accordingly
                createdAt: new Date(), // Set default values for other required fields if necessary
                phoneVerified: false, // Assuming phoneVerified should default to false
                avatar: null,
                instagramUrl: null,
                twitterUrl: null,
                metamaskAddress: null,
                discordUrl: null,
                totalXp: null,
                typeofInvestor: null,
                goalOfInvestor: null,
                userCharacter: null,
                userDevice: null,
                lastSignedAt: null,
                location: null,
                referralCode: null,
                referredBy: null,
                sessionToken: null,
                accessToken: null
              },
            },
          },
          code: magicLinkCode,
          expiresAt: new Date(Date.now() + 60 * 60 * 1000), // Magic link valid for 1 hour
        },
      });

      // Send magic link via WhatsApp
      const magicLinkUrl = `https://www.houseofweb3.com/api/v1/verify_magic_link?code=${magicLinkCode}`;
      await sendWhatsAppMagicLink(phoneNumber, magicLinkUrl);

      return magicLink;
    } catch (error) {
      console.error('Error creating magic link:', error);
      throw new Error('Failed to create magic link');
    }
  }

  public async verifyMagicLink(code: string): Promise<any> {
    try {
      const result = await prisma.$transaction(async (prisma) => {
        const magicLink = await prisma.magicLink.findFirst({
          where: {
            code,
            expiresAt: { gte: new Date() },
            isUsed: false,
          },
        });

        if (!magicLink) {
          throw new Error('Invalid or expired magic link');
        }

        const user = await prisma.user.update({
          where: { id: magicLink.userId },
          data: { phoneVerified: true },
        });

        await prisma.magicLink.update({
          where: { id: magicLink.id },
          data: { isUsed: true },
        });

        return user;
      });

      return result;
    } catch (error) {
      console.error('Error verifying magic link:', error);
      throw new Error('Failed to verify magic link');
    }
  }
}

export default UserService;
