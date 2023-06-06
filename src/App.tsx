import AppRoutes from 'routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ResponseMessage from 'components/ResponseMessage/ResponseMessage';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

const App = () => {
  const { success, error: userError } = useSelector((state: RootState) => state.userReducer);
  const { error: getUsersError } = useSelector((state: RootState) => state.getUsersReducer);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      {(success || userError || getUsersError) && (
        <ResponseMessage success={!!success} msg={success || userError || getUsersError} />
      )}
    </BrowserRouter>
  );
};

export default App;
