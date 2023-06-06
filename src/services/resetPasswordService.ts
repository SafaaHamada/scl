import { auth } from 'config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export const resetPasswordService = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};
