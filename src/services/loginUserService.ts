import { auth } from 'config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginUserService = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};
