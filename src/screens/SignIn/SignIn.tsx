import * as Yup from 'yup';

import { AppDispatch, RootState } from 'redux/store';
import { Button, Fade, Grid } from '@mui/material';
import { getCurrentUser, loginUser } from 'redux/actions/userActions';
import { logo2, signIn } from 'assets';
import { useDispatch, useSelector } from 'react-redux';

import Loading from 'components/Loading/Loading';
import { Paths } from 'constants/paths';
import styles from './SignIn.module.css';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { success, loading } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { handleChange, handleBlur, handleSubmit, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Email is not valid'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    }),
    onSubmit: () => {
      dispatch(loginUser(values.email, values.password));
      dispatch(getCurrentUser());
    },
  });

  useEffect(() => {
    if (success) {
      navigate(Paths.HOME, { replace: true });
    }
  }, [success, navigate]);

  return (
    <form className={styles.loginContainer} onSubmit={handleSubmit}>
      <Fade in timeout={{ enter: 1000 }}>
        <Grid container className={styles.loginCard}>
          <Grid className={styles.grid} display="flex" justifyContent="center" item md={6} sm={12}>
            <img src={signIn} alt="signIn" />
          </Grid>
          <Grid item md={6} sm={12}>
            <div>
              <img className={styles.logo} src={logo2} alt="logo" />
              <p className={styles.loginText}>Please enter your login credentials</p>
            </div>
            <div className={styles.inputContainer}>
              <input name="email" placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} />
              {errors.email && touched.email && <span className={styles.errorMsg}>{errors.email}</span>}
              <input
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
              />
              {errors.password && touched.password && <span className={styles.errorMsg}>{errors.password}</span>}
              <Loading loading={loading}>
                <Button className={`btn ${styles.btn}`} variant="contained" type="submit">
                  Login
                </Button>
              </Loading>
            </div>
            <div className={styles.forgotPassword}>
              <hr />
              <span>Or</span>
              <hr />
            </div>
            <p className={styles.forgotPasswordText}>
              Forgot Password? <span onClick={() => navigate(Paths.FORGET_PASSWORD)}>Restore Password</span>
            </p>
          </Grid>
        </Grid>
      </Fade>
    </form>
  );
};

export default SignIn;
