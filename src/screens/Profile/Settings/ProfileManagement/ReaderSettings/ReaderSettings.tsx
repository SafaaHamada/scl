import { AppDispatch, RootState } from 'redux/store';
import { Box, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineDown } from 'react-icons/ai';
import Loading from 'components/Loading/Loading';
import { getAllCountries } from 'redux/actions/countresAction';
import { readerValidation } from 'utils/readerValidation';
import styles from './ReaderSettings.module.css';
import { updateUser } from 'redux/actions/userActions';
import { useFormik } from 'formik';

const ReaderSettings = () => {
  const { data } = useSelector((state: RootState) => state.countriesReducer);
  const { currentUser, loading } = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue } = useFormik({
    initialValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
      password: '',
      dob: currentUser?.dob,
      gender: currentUser?.gender,
      country: currentUser?.country,
      province: currentUser?.province,
      phoneNumber: currentUser?.phoneNumber,
      educationalLevel: currentUser?.educationalLevel,
      institute: currentUser?.institute,
    },
    validationSchema: readerValidation,
    onSubmit: () => {
      dispatch(updateUser(currentUser!, values));
    },
  });

  const provinces = data.filter(item => item.country === values.country).map(country => country.cities);

  return (
    <Grid component="form" item pb={2} onSubmit={handleSubmit}>
      <div>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name..."
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <p className={styles.validationError}>{errors.firstName as string}</p>
            )}
          </Grid>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name..."
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <p className={styles.validationError}>{errors.lastName as string}</p>
            )}
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Enter your email..."
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p className={styles.validationError}>{errors.email as string}</p>}
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className={styles.validationError}>{errors.password as string}</p>
            )}
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="dob">Date Of Birth</label>
            <br />
            <input type="date" name="dob" value={values.dob} onChange={handleChange} onBlur={handleBlur} />
            {errors.dob && touched.dob && <p className={styles.validationError}>{errors.dob as string}</p>}
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="gender">Gender</label>
            <br />
            <Box sx={{ width: 400, display: 'flex', justifyContent: 'center' }} gap={2} className={styles.radioBtns}>
              <Box display="flex" alignItems="center">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                />
              </Box>
              <Box display="flex" alignItems="center">
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={values.gender === 'female'}
                  onChange={handleChange}
                />
              </Box>
            </Box>
            {errors.gender && touched.gender && <p className={styles.validationError}>{errors.gender as string}</p>}
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left" className={styles.selectContainer}>
            <label htmlFor="country">Country</label>
            <br />
            <select
              name="country"
              id="country"
              value={values.country}
              onClick={() => dispatch(getAllCountries())}
              onChange={e => setFieldValue('country', e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select a country
              </option>
              {data.map((country, index) => (
                <option key={index} value={country.country} label={country.country} />
              ))}
            </select>
            <AiOutlineDown />
          </Grid>
          <Grid item textAlign="left" className={styles.selectContainer}>
            <label htmlFor="province">Province</label>
            <br />
            <select name="province" id="province" value={values.province}>
              <option value="" disabled selected hidden>
                Select a province
              </option>
              {provinces &&
                provinces[0].map((province, index) => <option key={index} value={province} label={province} />)}
            </select>
            <AiOutlineDown />
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="firstName">Phone Number</label>
            <br />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter your phone number..."
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className={styles.validationError}>{errors.phoneNumber as string}</p>
            )}
          </Grid>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="educationalLevel">Educational Level</label>
            <br />
            <select
              name="educationalLevel"
              id="educationalLevel"
              value={values.educationalLevel}
              onChange={handleChange}
            >
              <option disabled selected hidden>
                Select educational level
              </option>
              <option value="Primary School" label="Primary School" />
              <option value="Middle School" label="Middle School" />
              <option value="High School" label="High School" />
              <option value="Bachelor's Degree" label="Bachelor's Degree" />
            </select>
            <AiOutlineDown />
          </Grid>
        </Grid>
        <Grid
          container
          position="relative"
          gap={4}
          sx={{ justifyContent: { xs: 'flex-start', sm: 'center', lg: 'flex-start' } }}
          mt={3}
        >
          <Grid item textAlign="left" position="relative" className={styles.selectContainer}>
            <label htmlFor="institute">Educational Institution</label>
            <br />
            <input
              type="text"
              name="institute"
              placeholder="Enter your institution..."
              value={values.institute}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.institute && touched.institute && (
              <p className={styles.validationError}>{errors.institute as string}</p>
            )}
          </Grid>
        </Grid>
      </div>
      <Box textAlign="center">
        <Loading loading={loading}>
          <Button
            variant="contained"
            className="btn"
            type="submit"
            sx={{
              background: '#0f3c5f',
              ':hover': {
                background: 'white',
                color: '#0f3c5f',
              },
            }}
          >
            Save
          </Button>
        </Loading>
      </Box>
    </Grid>
  );
};

export default ReaderSettings;
