import { doc, getDoc } from 'firebase/firestore';

import { db } from 'config/firebase';

export const getUserByIdService = async (id: string) => {
  const userRef = doc(db, 'users', id);
  const userData = await getDoc(userRef);
  const user = userData.data();
  return user;
};
