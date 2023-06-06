import { Navigate, Outlet } from 'react-router-dom';

import { Paths } from 'constants/paths';
import { useIsType } from 'hooks/useIsType';

const AdminRoute = () => {
  const isAdmin = useIsType('admin');

  return isAdmin ? <Outlet /> : <Navigate to={Paths.HOME} />;
};

export default AdminRoute;
