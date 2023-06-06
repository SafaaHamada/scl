import { AppDispatch, RootState } from 'redux/store';
import { Box, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineDown } from 'react-icons/ai';
import Loading from 'components/Loading/Loading';
import { getAllCountries } from 'redux/actions/countresAction';
import { publisherValidation } from 'utils/publisherValidation';
import styles from './PublisherSettings.module.css';
import { updateUser } from 'redux/actions/userActions';
import { useFormik } from 'formik';

const PublisherSettings = () => {
  const specializations = [
    { label: 'Biology' },
    { label: 'Chemistry' },
    { label: 'Physics' },
    { label: 'Mathematics' },
    { label: 'History' },
    { label: 'Languages' },
    { label: 'Medicine' },
    { label: 'Engineering' },
    { label: 'Management and Leadership' },
    { label: 'Economics' },
    { label: 'Accounting' },
    { label: 'Technology and Computer Science' },
    { label: 'Novels And Literary Stories' },
    { label: 'Human development and self development' },
    { label: 'Islamic Religion' },
    { label: 'History' },
    { label: 'Islamic Fiqh' },
    { label: 'Literature' },
    { label: 'Philosophy And Logic' },
    { label: 'Interpretation Of The Koran' },
    { label: 'The Culture' },
    { label: 'Islamic faith' },
  ];

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
      workPlaceName: currentUser?.workPlaceName,
      jobTitle: currentUser?.jobTitle,
      specialization: currentUser?.specialization,
      brief: currentUser?.brief,
    },
    validationSchema: publisherValidation,
    onSubmit: () => {
      dispatch(updateUser(currentUser!, values));
    },
  });

  const provinces = data.filter(item => item.country === values.country).map(country => country.cities);

  return (
    <Grid className={styles.publisherSettings} component="form" item pb={2} onSubmit={handleSubmit}>
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
                  name="gender"
                  value="male"
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                />
              </Box>
              <Box display="flex" alignItems="center">
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
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
            <select name="province" id="province" value={values.province} onChange={handleChange}>
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
            <label htmlFor="workPlaceName">Work Place Name</label>
            <br />
            <input
              type="text"
              name="workPlaceName"
              placeholder="Enter your work place..."
              value={values.workPlaceName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.workPlaceName && touched.workPlaceName && (
              <p className={styles.validationError}>{errors.workPlaceName as string}</p>
            )}
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left" position="relative" className={styles.selectContainer}>
            <label htmlFor="jobTitle">Job title</label>
            <br />
            <select name="jobTitle" id="jobTitle" value={values.jobTitle} onChange={handleChange}>
              <option value="" disabled selected hidden>
                Select your job title
              </option>
              <option value="Teacher" label="Teacher" />
              <option value="University Doctor" label="University Doctor" />
              <option value="Expert" label="Expert" />
              <option value="Doctor" label="Doctor" />
              <option value="Engineer" label="Engineer" />
              <option value="Lawyer" label="Lawyer" />
              <option value="Accountant" label="Accountant" />
              <option value="Author" label="Author" />
              <option value="Software Developer" label="Software Developer" />
              <option value="Web Developer" label="Web Developer" />
              <option value="Manager" label="Manager" />
              <option value="Lecturer" label="Lecturer" />
            </select>
            <AiOutlineDown />
          </Grid>
          <Grid item textAlign="left" className={styles.selectContainer}>
            <label htmlFor="specialization">Specialization</label>
            <br />
            <select name="specialization" id="specialization" value={values.specialization} onChange={handleChange}>
              <option value="" disabled selected hidden>
                Select your specialization
              </option>
              {specializations.map((specialization, index) => (
                <option key={index} value={specialization.label} label={specialization.label} />
              ))}
            </select>
            <AiOutlineDown />
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} mt={3} sx={{ justifyContent: { md: 'center' } }}>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="brief">Brief</label>
            <br />
            <textarea
              name="brief"
              id="brief"
              placeholder="Enter your brief..."
              value={values.brief}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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

export default PublisherSettings;
