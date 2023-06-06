import { AppDispatch } from 'redux/store';
import { FirebaseError } from 'firebase/app';
import { GetUsersTypes } from 'constants/actionTypes';
import { getUsersService } from 'services/getUsersService';

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: GetUsersTypes.GET_USERS_LOADING, payload: true });
    const users = await getUsersService();
    dispatch({ type: GetUsersTypes.GET_USERS, payload: users });
  } catch (err) {
    dispatch({ type: GetUsersTypes.GET_USERS_ERROR, payload: (err as FirebaseError).message });
  } finally {
    dispatch({ type: GetUsersTypes.GET_USERS_LOADING, payload: false });
  }
};
