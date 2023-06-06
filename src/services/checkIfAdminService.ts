import { DocumentData, doc, getDoc } from 'firebase/firestore';

import { db } from 'config/firebase';

export const checkIfAdminService = async (currentUser: DocumentData) => {
  const userDocRef = doc(db, 'users', currentUser.id);
  const userDocSnapshot = await getDoc(userDocRef);
  return userDocSnapshot.exists() && userDocSnapshot.data().type === 'admin';
};
