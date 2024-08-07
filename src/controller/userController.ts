import { Request, Response } from 'express';
import UserService from '../service/userService';

const userService = new UserService();

export async function signUpWithPhoneNumber(req: Request, res: Response) {
  const { contact_number } = req.body;

  try {
    const otpVerification = await userService.createUserWithPhoneNumber(contact_number);
    res.status(200).json({ message: 'OTP sent successfully', otpVerification });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}

export async function verifyOtp(req: Request, res: Response) {
  const { contact_number, otp } = req.body;

  try {
    const user = await userService.verifyOtpAndCreateUser(contact_number, otp);
    res.status(200).json({ message: 'User verified successfully', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}

export async function createMagicLinkController(req: Request, res: Response) {
  const { contact_number } = req.body;

  try {
    const magicLink = await userService.createMagicLink(contact_number);
    res.status(200).json({ message: 'Magic link created successfully', magicLink });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}

export async function verifyMagicLinkController(req: Request, res: Response) {
  const { code } = req.query;

  try {
    const user = await userService.verifyMagicLink(code as string);
    res.status(200).json({ message: 'Magic link verified successfully', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
}
