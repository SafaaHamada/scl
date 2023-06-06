import { DocumentData, deleteDoc, doc } from 'firebase/firestore';

import { db } from 'config/firebase';

export const deleteUserService = async (currentUser: DocumentData) => {
  const userRef = doc(db, 'users', currentUser.id);
  await deleteDoc(userRef);
};
