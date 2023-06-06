import {
  CreateUserTypes,
  DeleteUserTypes,
  GetCurrentUserTypes,
  GetUserByIdTypes,
  LoginUserTypes,
  LogoutUserTypes,
  ResetPasswordTypes,
  UpdateProfilePicTypes,
  UpdateUserTypes,
} from 'constants/actionTypes';
import { DocumentData, doc, updateDoc } from 'firebase/firestore';

import { AppDispatch } from 'redux/store';
import { ChangeEvent } from 'react';
import { FirebaseError } from 'firebase/app';
import { createUserService } from 'services/createUserService';
import { db } from 'config/firebase';
import { deleteUserService } from 'services/deleteUserService';
import { getCurrentUserService } from 'services/getCurrentUserService';
import { getUserByIdService } from 'services/getUserByIdService';
import { loginUserService } from 'services/loginUserService';
import { logoutService } from 'services/logoutService';
import { resetPasswordService } from 'services/resetPasswordService';
import { updateProfilePicService } from 'services/updateProfilePicService';
import { updateUserService } from 'services/updateUserService';

export const createUser =
  (email: string, password: string, data: Record<string, unknown>) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: CreateUserTypes.CREATE_USER_LOADING, payload: true });
      await createUserService(email, password, data);
      dispatch({ type: CreateUserTypes.CREATE_USER, payload: 'Account has been created successfully' });
    } catch (err) {
      dispatch({ type: CreateUserTypes.CREATE_USER_ERROR, payload: (err as FirebaseError).message });
    } finally {
      dispatch({ type: CreateUserTypes.CREATE_USER_LOADING, payload: false });
    }
  };

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: LoginUserTypes.LOGIN_LOADING, payload: true });
    await loginUserService(email, password);
    dispatch({ type: LoginUserTypes.LOGIN, payload: 'Logged in successfully' });
  } catch (err) {
    dispatch({ type: LoginUserTypes.LOGIN_ERROR, payload: (err as FirebaseError).message });
  } finally {
    dispatch({ type: LoginUserTypes.LOGIN_LOADING, payload: false });
  }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    await logoutService();
    dispatch({ type: LogoutUserTypes.LOGOUT, payload: 'Logged out successfully' });
  } catch (err) {
    dispatch({ type: LogoutUserTypes.LOGOUT_ERROR, payload: (err as FirebaseError).message });
  }
};

export const resetPassword = (email: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: ResetPasswordTypes.RESET_PASSWORD_LOADING, payload: true });
    await resetPasswordService(email);
    dispatch({
      type: ResetPasswordTypes.RESET_PASSWORD,
      payload: 'Password reset email sent. Please check your inbox',
    });
  } catch (err) {
    dispatch({ type: ResetPasswordTypes.RESET_PASSWORD_ERROR, payload: (err as FirebaseError).message });
  } finally {
    dispatch({ type: ResetPasswordTypes.RESET_PASSWORD_LOADING, payload: false });
  }
};

export const getCurrentUser = () => async (dispatch: AppDispatch) => {
  try {
    const currentUser = await getCurrentUserService();
    dispatch({ type: GetCurrentUserTypes.GET_CURRENT_USER, payload: currentUser });
  } catch (err) {
    dispatch({ type: GetCurrentUserTypes.GET_CURRENT_USER_ERROR, payload: (err as FirebaseError).message });
  }
};

export const getUserById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: GetUserByIdTypes.GET_USER_BY_ID_LOADING, payload: true });
    const user = await getUserByIdService(id);
    dispatch({ type: GetUserByIdTypes.GET_USER_BY_ID, payload: user });
  } catch (err) {
    dispatch({ type: GetUserByIdTypes.GET_USER_BY_ID_ERROR, payload: (err as FirebaseError).message });
  } finally {
    dispatch({ type: GetUserByIdTypes.GET_USER_BY_ID_LOADING, payload: false });
  }
};

export const updateProfilePic =
  (e: ChangeEvent<HTMLInputElement>, currentUser: DocumentData) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UpdateProfilePicTypes.UPDATE_PROFILE_PIC_LOADING, payload: true });
      const downloadUrl = await updateProfilePicService(e);
      const userRef = doc(db, 'users', currentUser?.id);
      await updateDoc(userRef, { image: downloadUrl });
      dispatch({
        type: UpdateProfilePicTypes.UPDATE_PROFILE_PIC,
        payload: 'Profile picture has been updated successfully',
      });
    } catch (err) {
      dispatch({ type: UpdateProfilePicTypes.UPDATE_PROFILE_PIC_ERROR, payload: (err as FirebaseError).message });
    } finally {
      dispatch({ type: UpdateProfilePicTypes.UPDATE_PROFILE_PIC_LOADING, payload: false });
    }
  };

export const updateUser = (currentUser: DocumentData, values: object) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: UpdateUserTypes.UPDATE_USER_LOADING, payload: true });
    await updateUserService(currentUser, values);
    dispatch({ type: UpdateUserTypes.UPDATE_USER, payload: 'Updated successfully' });
  } catch (err) {
    dispatch({ type: UpdateUserTypes.UPDATE_USER_ERROR, payload: (err as FirebaseError).message });
  } finally {
    dispatch({ type: UpdateUserTypes.UPDATE_USER_LOADING, payload: false });
  }
};

export const deleteUser = (currentUser: DocumentData) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: DeleteUserTypes.DELETE_USER_LOADING, payload: true });
    await deleteUserService(currentUser);
    dispatch({ type: DeleteUserTypes.DELETE_USER, payload: 'Account deleted successfully' });
  } catch (err) {
    dispatch({ type: DeleteUserTypes.DELETE_USER_ERROR, payload: (err as FirebaseError).message });
  } finally {
    dispatch({ type: DeleteUserTypes.DELETE_USER_LOADING, payload: false });
  }
};
