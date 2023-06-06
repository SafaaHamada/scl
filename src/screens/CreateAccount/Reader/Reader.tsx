import { AiOutlineDown, AiOutlineLeft } from 'react-icons/ai';
import { AppDispatch, RootState } from 'redux/store';
import { Button, Fade, Grid } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { createUser, getCurrentUser } from 'redux/actions/userActions';
import { logo2, peopleReading } from 'assets';
import { useDispatch, useSelector } from 'react-redux';

import Loading from 'components/Loading/Loading';
import { Paths } from 'constants/paths';
import { getAllCountries } from 'redux/actions/countresAction';
import { getAllProvinces } from 'utils/getAllProvinces';
import { readerValidation } from 'utils/readerValidation';
import styles from './Reader.module.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

interface Props {
  onReturn: () => void;
}

const Reader: FC<Props> = ({ onReturn }) => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>();
  const provinces = getAllProvinces(selectedCountryIndex ?? 0);
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.countriesReducer);
  const { success, loading } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dob: '',
      gender: '',
      country: '',
      province: '',
      phoneNumber: '',
      educationalLevel: '',
      institute: '',
      image: '',
      count: 0,
      rating: 0,
      type: 'reader',
    },
    validationSchema: readerValidation,
    onSubmit: () => {
      const { email, password, ...userData } = values;
      dispatch(createUser(email, password, userData));
      dispatch(getCurrentUser());
    },
  });

  useEffect(() => {
    if (success) {
      navigate(Paths.HOME, { replace: true });
    }
  }, [success, navigate]);

  return (
    <form className={styles.readerContainer} onSubmit={handleSubmit}>
      <Fade in timeout={{ enter: 1000 }}>
        <Grid container className={styles.readerCard} justifyContent="space-between" alignItems="center">
          <AiOutlineLeft className={styles.back} size={32} onClick={onReturn} />
          <Grid item>
            <img className={styles.leftImg} src={peopleReading} alt="peopleReading" />
          </Grid>
          <Grid item>
            <img className={styles.logo} src={logo2} alt="logo" />
            <p className={styles.title}>Create A Reader Account</p>
            <div className={styles.formContainer}>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName && (
                    <p className={styles.validationError}>{errors.firstName}</p>
                  )}
                </Grid>
                <Grid item textAlign="left">
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastName && touched.lastName && <p className={styles.validationError}>{errors.lastName}</p>}
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="email">Email Address</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <p className={styles.validationError}>{errors.email}</p>}
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
                  {errors.password && touched.password && <p className={styles.validationError}>{errors.password}</p>}
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="dob">Date Of Birth</label>
                  <br />
                  <input type="date" name="dob" onChange={handleChange} />
                  {errors.dob && touched.dob && <p className={styles.validationError}>{errors.dob}</p>}
                </Grid>
                <Grid item textAlign="left">
                  <label htmlFor="gender">Gender</label>
                  <br />
                  <div className={styles.gender}>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" value="male" onChange={handleChange} />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value="female" onChange={handleChange} />
                  </div>
                  {errors.gender && touched.gender && <p className={styles.validationError}>{errors.gender}</p>}
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left" position="relative">
                  <label htmlFor="country">Country</label>
                  <br />
                  <select
                    ref={selectRef}
                    name="country"
                    id="country"
                    onClick={() => dispatch(getAllCountries())}
                    onChange={e => {
                      setFieldValue('country', e.target.value);
                      const selectedIndex = e.target.selectedIndex;
                      setSelectedCountryIndex(selectedIndex - 1);
                    }}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled selected hidden>
                      Select a country
                    </option>
                    {data.map((country, index) => (
                      <option key={index} value={country.country} label={country.country} />
                    ))}
                  </select>
                  <AiOutlineDown className={styles.dropdownIcon} onClick={() => selectRef.current?.click()} />
                  {errors.country && touched.country && <p className={styles.validationError}>{errors.country}</p>}
                </Grid>
                <Grid item textAlign="left" position="relative">
                  <label htmlFor="province">Province</label>
                  <br />
                  <select
                    ref={selectRef}
                    name="province"
                    id="province"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!values.country}
                  >
                    <option value="" disabled selected hidden>
                      Select a province
                    </option>
                    {provinces &&
                      provinces.cities?.map((province, index) => (
                        <option key={index} value={province} label={province} />
                      ))}
                  </select>
                  <AiOutlineDown className={styles.dropdownIcon} onClick={() => selectRef.current?.click()} />
                  {errors.province && touched.province && <p className={styles.validationError}>{errors.province}</p>}
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="firstName">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    className={styles.phoneField}
                    name="phoneNumber"
                    placeholder="Enter your phone number..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <p className={styles.validationError}>{errors.phoneNumber}</p>
                  )}
                </Grid>
                <Grid item textAlign="left" position="relative">
                  <label htmlFor="educationalLevel">Educational Level</label>
                  <br />
                  <select
                    ref={selectRef}
                    name="educationalLevel"
                    id="educationalLevel"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option disabled selected hidden>
                      Select educational level
                    </option>
                    <option value="Primary School" label="Primary School" />
                    <option value="Middle School" label="Middle School" />
                    <option value="High School" label="High School" />
                    <option value="Bachelor's Degree" label="Bachelor's Degree" />
                  </select>
                  <AiOutlineDown className={styles.dropdownIcon} onClick={() => selectRef.current?.click()} />
                  {errors.educationalLevel && touched.educationalLevel && (
                    <p className={styles.validationError}>{errors.educationalLevel}</p>
                  )}
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} mt={3} className={styles.institution}>
                <Grid item textAlign="left">
                  <label htmlFor="institute">Educational Institution</label>
                  <br />
                  <input
                    type="text"
                    name="institute"
                    placeholder="Enter your institution..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.institute && touched.institute && (
                    <p className={styles.validationError}>{errors.institute}</p>
                  )}
                </Grid>
              </Grid>
            </div>
            <Loading loading={loading}>
              <Button variant="contained" className={`${styles.contained} btn`} type="submit">
                Create
              </Button>
            </Loading>
          </Grid>
        </Grid>
      </Fade>
    </form>
  );
};

export default Reader;
