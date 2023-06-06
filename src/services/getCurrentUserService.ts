import { auth, db } from 'config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const getCurrentUserService = async () => {
  if (auth.currentUser) {
    const userRef = doc(db, 'users', auth.currentUser.uid);
    const userDoc = await getDoc(userRef);
    const currentUser = userDoc.data();
    return currentUser;
  }
};
