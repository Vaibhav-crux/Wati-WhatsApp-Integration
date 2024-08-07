import { logger } from "@/utils/logger/logger";
import prismaquery from "../../../../Db/db";
import otpGenerator from 'otp-generator';
import WhatsAppService from './whatsappService';

class UserService {
  public async createUserWithPhoneNumber(phoneNumber: string): Promise<any> {
    try {
      // Generate a 6-digit numeric OTP
      const otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

      const otpVerification = await prismaquery.otpVerification.create({
        data: {
          user: {
            connectOrCreate: {
              where: { phoneNumber },
              create: { 
                phoneNumber, 
                signUpMethod: 'PHONE', 
                createdAt: new Date(), // Set default values for other required fields if necessary
                phoneVerified: false,
              },
            },
          },
          otp,
          isUsed: false,
          expiresAt: new Date(Date.now() + 15 * 60 * 1000), // OTP valid for 15 minutes
        },
      });

      // Send OTP via WhatsApp
      await WhatsAppService.sendWhatsAppMessage(phoneNumber, otp);

      return otpVerification;
    } catch (error) {
      logger.error('Error creating user with phone number:', error);
      throw new Error('Failed to create user with phone number');
    }
  }

  public async verifyOtpAndCreateUser(phoneNumber: string, otp: string): Promise<any> {
    try {
      const result = await prismaquery.$transaction(async (prisma) => {
        const otpVerification = await prismaquery.otpVerification.findFirst({
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

        const user = await prismaquery.user.update({
          where: { phoneNumber },
          data: { phoneVerified: true },
        });

        await prismaquery.otpVerification.update({
          where: { id: otpVerification.id },
          data: { isUsed: true },
        });

        return user;
      });

      return result;
    } catch (error) {
      logger.error('Error verifying OTP and creating user:', error);
      throw new Error('Failed to verify OTP and create user');
    }
  }

  public async createMagicLink(phoneNumber: string): Promise<any> {
    try {
      // Generate an 8-character alphanumeric code
      const magicLinkCode = otpGenerator.generate(8, { digits: true, upperCaseAlphabets: true, specialChars: false, lowerCaseAlphabets: false });

      const magicLink = await prismaquery.magicLink.create({
        data: {
          user: {
            connectOrCreate: {
              where: { phoneNumber },
              create: { 
                phoneNumber, 
                signUpMethod: 'PHONE', 
                createdAt: new Date(), // Set default values for other required fields if necessary
                phoneVerified: false,
              },
            },
          },
          code: magicLinkCode,
          expiresAt: new Date(Date.now() + 60 * 60 * 1000), // Magic link valid for 1 hour
        },
      });

      // Send magic link via WhatsApp
      const magicLinkUrl = `https://www.houseofweb3.com/api/v1/verify_magic_link?code=${magicLinkCode}`;
      await WhatsAppService.sendWhatsAppMagicLink(phoneNumber, magicLinkUrl);

      return magicLink;
    } catch (error) {
      logger.error('Error creating magic link:', error);
      throw new Error('Failed to create magic link');
    }
  }

  public async verifyMagicLink(code: string): Promise<any> {
    try {
      const result = await prismaquery.$transaction(async (prisma) => {
        const magicLink = await prismaquery.magicLink.findFirst({
          where: {
            code,
            expiresAt: { gte: new Date() },
            isUsed: false,
          },
        });

        if (!magicLink) {
          throw new Error('Invalid or expired magic link');
        }

        const user = await prismaquery.user.update({
          where: { id: magicLink.userId },
          data: { phoneVerified: true },
        });

        await prismaquery.magicLink.update({
          where: { id: magicLink.id },
          data: { isUsed: true },
        });

        return user;
      });

      return result;
    } catch (error) {
      logger.error('Error verifying magic link:', error);
      throw new Error('Failed to verify magic link');
    }
  }
}

export default UserService;
