import { collection, getDocs } from 'firebase/firestore';

import { db } from 'config/firebase';

export const getUsersService = async () => {
  const usersRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersRef);
  const users = querySnapshot.docs.map(doc => doc.data());
  const regularUsers = users.filter(user => user.type !== 'admin');
  return regularUsers;
};
