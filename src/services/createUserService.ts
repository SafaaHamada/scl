import { auth, db } from 'config/firebase';
import { doc, setDoc } from 'firebase/firestore';

import { createUserWithEmailAndPassword } from 'firebase/auth';

export const createUserService = async (email: string, password: string, data: Record<string, unknown>) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', user.uid), { ...data, id: user.uid, email });
};
