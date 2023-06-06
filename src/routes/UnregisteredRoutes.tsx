import { Navigate, Outlet } from 'react-router-dom';

import { Paths } from 'constants/paths';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

const UnregisteredRoutes = () => {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);

  return currentUser ? <Navigate to={Paths.HOME} /> : <Outlet />;
};

export default UnregisteredRoutes;
