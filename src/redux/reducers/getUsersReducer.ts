import { GetUsersTypes } from 'constants/actionTypes';

interface GetUsersState {
  users: Array<Record<string, unknown>>;
  loading: boolean;
  error: string | null;
}

interface GetUsersAction {
  type: string;
  payload: unknown;
}

const initalState: GetUsersState = {
  users: [],
  loading: false,
  error: null,
};

export const getUsersReducer = (state = initalState, action: GetUsersAction): GetUsersState => {
  switch (action.type) {
    case GetUsersTypes.GET_USERS:
      return { ...state, users: action.payload as Array<Record<string, unknown>>, error: null };
    case GetUsersTypes.GET_USERS_LOADING:
      return { ...state, loading: action.payload as boolean };
    case GetUsersTypes.GET_USERS_ERROR:
      return { ...state, error: action.payload as string };
    default:
      return state;
  }
};
