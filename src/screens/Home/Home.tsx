import { AppDispatch, RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';

import Books from './Books/Books';
import Info from './Info/Info';
import Search from './Search/Search';
import { getCurrentUser } from 'redux/actions/userActions';
import { useEffect } from 'react';

const Home = () => {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, currentUser]);

  return (
    <div>
      <Search />
      <Info />
      <Books />
    </div>
  );
};

export default Home;
