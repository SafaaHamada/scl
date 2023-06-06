import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

type User = 'admin' | 'reader' | 'publisher' | 'institution';

export const useIsType = (type: User) => {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  return currentUser?.type === type;
};
