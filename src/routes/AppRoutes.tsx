import { Route, Routes } from 'react-router-dom';

import About from 'screens/About/About';
import AddBook from 'screens/AddBook/AddBook';
import AdminRoute from './AdminRoute';
import BookDetails from 'screens/BookDetails/BookDetails';
import Books from 'screens/Books/Books';
import Category from 'screens/Category/Category';
import Community from 'screens/Community/Community';
import CreateAccount from 'screens/CreateAccount/CreateAccount';
import Error from 'screens/Error/Error';
import ForgetPassword from 'screens/ForgetPassword/ForgetPassword';
import Home from 'screens/Home/Home';
import MyLibrary from 'screens/MyLibrary/MyLibrary';
import { Paths } from 'constants/paths';
import Profile from 'screens/Profile/Profile';
import Request from 'screens/Request/Request';
import SignIn from 'screens/SignIn/SignIn';
import UnregisteredRoutes from './UnregisteredRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route Component={UnregisteredRoutes}>
        <Route path={Paths.SIGN_IN} Component={SignIn} />
        <Route path={Paths.FORGET_PASSWORD} Component={ForgetPassword} />
        <Route path={Paths.CREATE_ACCOUNT} Component={CreateAccount} />
      </Route>
      <Route Component={AdminRoute}>
        <Route path={Paths.REQUEST} Component={Request} />
      </Route>
      <Route path={Paths.HOME} Component={Home} />
      <Route path={Paths.ABOUT} Component={About} />
      <Route path={Paths.COMMUNITY} Component={Community} />
      <Route path={`${Paths.PROFILE}/:id`} Component={Profile} />
      <Route path={Paths.BOOKS} Component={Books} />
      <Route path={Paths.CATEGORY} Component={Category} />
      <Route path={`${Paths.BOOK_DETAILS}/:id`} Component={BookDetails} />
      <Route path={Paths.LIBRARY} Component={MyLibrary} />
      <Route path={Paths.ADD_BOOK} Component={AddBook} />
      <Route path={Paths.ERROR} Component={Error} />
    </Routes>
  );
};

export default AppRoutes;
