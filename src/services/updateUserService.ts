import { DocumentData, doc, updateDoc } from 'firebase/firestore';

import { db } from 'config/firebase';

export const updateUserService = async (currentUser: DocumentData, values: object) => {
  const userRef = doc(db, 'users', currentUser?.id);
  await updateDoc(userRef, values);
};
