import { Alert, Snackbar } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { resetErrorSuccess } from 'redux/actions/resetAction';
import { useDispatch } from 'react-redux';

interface Props {
  success: boolean;
  msg: string | null;
}

const ResponseMessage: FC<Props> = ({ success, msg }) => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setSnackbarOpen(true);
  }, []);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    dispatch(resetErrorSuccess());
  };

  return (
    <Snackbar open={snackbarOpen} onClose={handleCloseSnackbar} autoHideDuration={3000}>
      <Alert onClose={handleCloseSnackbar} severity={success ? 'success' : 'error'}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default ResponseMessage;
