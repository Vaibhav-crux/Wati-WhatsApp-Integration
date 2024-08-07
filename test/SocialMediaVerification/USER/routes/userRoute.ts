import { Router } from "express";
import UserController from "../controller/userController";

class UserRoutes {
  public path = "/user";
  public router = Router();
  private userController = new UserController();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}/create_otp`,
      this.userController.signUpWithPhoneNumber.bind(this.userController)
    );
    this.router.post(
      `${this.path}/verify_otp`,
      this.userController.verifyOtp.bind(this.userController)
    );
    this.router.post(
      `${this.path}/create_magic_link`,
      this.userController.createMagicLink.bind(this.userController)
    );
    this.router.get(
      `${this.path}/verify_magic_link`,
      this.userController.verifyMagicLink.bind(this.userController)
    );
  }
}

export default UserRoutes;
