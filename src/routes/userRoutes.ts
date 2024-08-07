import { Router } from 'express';
import { signUpWithPhoneNumber, verifyOtp, createMagicLinkController, verifyMagicLinkController } from '../controller/userController';

const router = Router();

router.post('/create_otp', signUpWithPhoneNumber);
router.post('/verify_otp', verifyOtp);
router.post('/create_magic_link', createMagicLinkController);
router.get('/verify_magic_link', verifyMagicLinkController);

export default router;
