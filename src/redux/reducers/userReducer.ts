import {
  CreateUserTypes,
  DeleteUserTypes,
  GetCurrentUserTypes,
  GetUserByIdTypes,
  LoginUserTypes,
  LogoutUserTypes,
  RESET_ERROR_SUCCESS,
  ResetPasswordTypes,
  UpdateProfilePicTypes,
  UpdateUserTypes,
} from 'constants/actionTypes';

import { DocumentData } from 'firebase/firestore';

interface UserState {
  success: string | null;
  loading: boolean;
  imageLoading: boolean;
  error: string | null;
  currentUser: DocumentData | null;
  selectedUser: DocumentData | null;
}

interface UserAction {
  type: string;
  payload: unknown;
}

const initialState: UserState = {
  success: null,
  loading: false,
  imageLoading: false,
  error: null,
  currentUser: null,
  selectedUser: null,
};

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case CreateUserTypes.CREATE_USER:
      return { ...state, success: action.payload as string, error: null };
    case CreateUserTypes.CREATE_USER_LOADING:
      return { ...state, loading: action.payload as boolean };
    case CreateUserTypes.CREATE_USER_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case LoginUserTypes.LOGIN:
      return { ...state, success: action.payload as string, error: null };
    case LoginUserTypes.LOGIN_LOADING:
      return { ...state, loading: action.payload as boolean };
    case LoginUserTypes.LOGIN_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case LogoutUserTypes.LOGOUT:
      return { ...state, success: action.payload as string, error: null, currentUser: null };
    case LogoutUserTypes.LOGOUT_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case ResetPasswordTypes.RESET_PASSWORD:
      return { ...state, success: action.payload as string, error: null };
    case ResetPasswordTypes.RESET_PASSWORD_LOADING:
      return { ...state, loading: action.payload as boolean };
    case ResetPasswordTypes.RESET_PASSWORD_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case GetCurrentUserTypes.GET_CURRENT_USER:
      return { ...state, currentUser: action.payload as DocumentData, error: null };
    case GetCurrentUserTypes.GET_CURRENT_USER_ERROR:
      return { ...state, error: action.payload as string };
    case GetUserByIdTypes.GET_USER_BY_ID:
      return { ...state, selectedUser: action.payload as DocumentData, error: null };
    case GetUserByIdTypes.GET_USER_BY_ID_LOADING:
      return { ...state, loading: action.payload as boolean };
    case GetUserByIdTypes.GET_USER_BY_ID_ERROR:
      return { ...state, error: action.payload as string };
    case UpdateProfilePicTypes.UPDATE_PROFILE_PIC:
      return { ...state, success: action.payload as string, error: null };
    case UpdateProfilePicTypes.UPDATE_PROFILE_PIC_LOADING:
      return { ...state, imageLoading: action.payload as boolean };
    case UpdateProfilePicTypes.UPDATE_PROFILE_PIC_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case UpdateUserTypes.UPDATE_USER:
      return { ...state, success: action.payload as string, error: null };
    case UpdateUserTypes.UPDATE_USER_LOADING:
      return { ...state, loading: action.payload as boolean };
    case UpdateUserTypes.UPDATE_USER_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case DeleteUserTypes.DELETE_USER:
      return { ...state, success: action.payload as string, error: null, currentUser: null };
    case DeleteUserTypes.DELETE_USER_LOADING:
      return { ...state, loading: action.payload as boolean };
    case DeleteUserTypes.DELETE_USER_ERROR:
      return { ...state, error: action.payload as string, success: null };
    case RESET_ERROR_SUCCESS:
      return { ...state, error: null, success: null };
    default:
      return state;
  }
};
