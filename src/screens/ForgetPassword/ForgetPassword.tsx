import * as Yup from 'yup';

import { AppDispatch, RootState } from 'redux/store';
import { Button, Fade, Grid } from '@mui/material';
import { forgetPassword, logo2 } from 'assets';
import { useDispatch, useSelector } from 'react-redux';

import Loading from 'components/Loading/Loading';
import { Paths } from 'constants/paths';
import { resetPassword } from 'redux/actions/userActions';
import styles from './ForgetPassword.module.css';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const { success, loading } = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { handleChange, handleBlur, handleSubmit, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Email is not valid'),
    }),
    onSubmit: () => {
      dispatch(resetPassword(values.email));
    },
  });

  useEffect(() => {
    if (success) {
      navigate(Paths.HOME);
    }
  }, [success, navigate]);

  return (
    <form className={styles.forgetPasswordContainer} onSubmit={handleSubmit}>
      <Fade in timeout={{ enter: 1000 }}>
        <Grid container className={styles.forgetPasswordCard}>
          <Grid className={styles.grid} item md={6} sm={12}>
            <img src={forgetPassword} alt="forgetPassword" />
          </Grid>
          <Grid item md={6} sm={12} display="flex" flexDirection="column" justifyContent="space-evenly">
            <div>
              <img src={logo2} alt="logo" />
              <p className={styles.forgetPasswordText}>Please enter your email address to forget password</p>
            </div>
            <div className={styles.inputContainer}>
              <input name="email" placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} />
              {errors.email && touched.email && <span className={styles.errorMsg}>{errors.email}</span>}
              <Loading loading={loading}>
                <Button className={`btn ${styles.btn}`} variant="contained" type="submit">
                  Reset
                </Button>
              </Loading>
            </div>
            <div />
          </Grid>
        </Grid>
      </Fade>
    </form>
  );
};

export default ForgetPassword;
