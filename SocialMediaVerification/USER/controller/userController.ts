import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { logger } from "@/utils/logger/logger";
import UserService from "../services/userService";
import { ErrorCommonStrings, localConstant } from "@/utils/constants";

class UserController {
  private userService = new UserService();

  public signUpWithPhoneNumber = async (req: Request, res: Response): Promise<Response | void> => {
    const { contact_number } = req.body;

    try {
      const otpVerification = await this.userService.createUserWithPhoneNumber(contact_number);
      return res.status(StatusCodes.OK).json({ message: 'OTP sent successfully', otpVerification });
    } catch (error) {
      logger.error("Error in signUpWithPhoneNumber request={}, message={}", req.body, (error as Error).message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: (error as Error).message || localConstant.ERROR_IN_SENDING_OTP,
      });
    }
  };

  public verifyOtp = async (req: Request, res: Response): Promise<Response | void> => {
    const { contact_number, otp } = req.body;

    try {
      const user = await this.userService.verifyOtpAndCreateUser(contact_number, otp);
      return res.status(StatusCodes.OK).json({ message: 'User verified successfully', user });
    } catch (error) {
      logger.error("Error in verifyOtp request={}, message={}", req.body, (error as Error).message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: (error as Error).message || localConstant.ERROR_IN_VERIFYING_OTP,
      });
    }
  };

  public createMagicLink = async (req: Request, res: Response): Promise<Response | void> => {
    const { contact_number } = req.body;

    try {
      const magicLink = await this.userService.createMagicLink(contact_number);
      return res.status(StatusCodes.OK).json({ message: 'Magic link created successfully', magicLink });
    } catch (error) {
      logger.error("Error in createMagicLink request={}, message={}", req.body, (error as Error).message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: (error as Error).message || localConstant.ERROR_IN_CREATING_MAGIC_LINK,
      });
    }
  };

  public verifyMagicLink = async (req: Request, res: Response): Promise<Response | void> => {
    const { code } = req.query;

    try {
      const user = await this.userService.verifyMagicLink(code as string);
      return res.status(StatusCodes.OK).json({ message: 'Magic link verified successfully', user });
    } catch (error) {
      logger.error("Error in verifyMagicLink request={}, message={}", req.query, (error as Error).message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: (error as Error).message || localConstant.ERROR_IN_VERIFYING_MAGIC_LINK,
      });
    }
  };
}

export default UserController;
