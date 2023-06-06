import { auth } from 'config/firebase';

export const logoutService = async () => {
  await auth.signOut();
};
