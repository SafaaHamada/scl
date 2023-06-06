import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { ChangeEvent } from 'react';
import { storage } from 'config/firebase';

export const updateProfilePicService = async (e: ChangeEvent<HTMLInputElement>) => {
  const selectedFile = e.target.files?.[0];
  const storageRef = ref(storage, `images/${selectedFile?.name}`);
  await uploadBytes(storageRef, selectedFile!);
  const downloadUrl = await getDownloadURL(storageRef);
  return downloadUrl;
};
