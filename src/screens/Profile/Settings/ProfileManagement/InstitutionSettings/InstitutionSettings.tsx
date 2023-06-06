import { AppDispatch, RootState } from 'redux/store';
import { Box, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineDown } from 'react-icons/ai';
import Loading from 'components/Loading/Loading';
import { getAllCountries } from 'redux/actions/countresAction';
import { institutionValidation } from 'utils/institutionValidation';
import styles from './InstitutionSettings.module.css';
import { updateUser } from 'redux/actions/userActions';
import { useFormik } from 'formik';
import { useRef } from 'react';

const InstitutionSettings = () => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { data } = useSelector((state: RootState) => state.countriesReducer);
  const { currentUser, loading } = useSelector((state: RootState) => state.userReducer);
  const dispatch: AppDispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue } = useFormik({
    initialValues: {
      institutionName: currentUser?.institutionName,
      institutionType: currentUser?.institutionType,
      doc: currentUser?.doc,
      email: currentUser?.email,
      password: '',
      country: currentUser?.country,
      province: currentUser?.province,
      phoneNumber1: currentUser?.phoneNumber1,
      phoneNumber2: currentUser?.phoneNumber2,
      phoneNumber3: currentUser?.phoneNumber3,
      phoneNumber4: currentUser?.phoneNumber4,
      phoneNumber5: currentUser?.phoneNumber5,
      address: currentUser?.address,
      facebook: currentUser?.facebook,
      instagram: currentUser?.instagram,
      twitter: currentUser?.twitter,
      brief: currentUser?.brief,
    },
    validationSchema: institutionValidation,
    onSubmit: () => {
      dispatch(updateUser(currentUser!, values));
    },
  });

  const provinces = data.filter(item => item.country === values.country).map(country => country.cities);

  return (
    <Grid component="form" item pb={2} onSubmit={handleSubmit} className={styles.institutionSettings}>
      <div>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="institutionName">Institution Name</label>
            <br />
            <input
              type="text"
              name="institutionName"
              placeholder="Enter institution name..."
              value={values.institutionName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.institutionName && touched.institutionName && (
              <p className={styles.validationError}>{errors.institutionName as string}</p>
            )}
          </Grid>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="lastName">Institution Type</label>
            <br />
            <select
              ref={selectRef}
              name="institutionType"
              id="institutionType"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.institutionType}
            >
              <option value="" disabled selected hidden>
                Select an institution type
              </option>
              <option value="school" label="School" />
              <option value="academy" label="Academy" />
              <option value="university" label="University" />
              <option value="publicLibrary" label="Public Library" />
              <option value="trainingCenter" label="Training Center" />
              <option value="other" label="Other" />
            </select>
            <AiOutlineDown onClick={() => selectRef.current?.click()} />
            {errors.institutionType && touched.institutionType && (
              <p className={styles.validationError}>{errors.institutionType as string}</p>
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
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
            <label htmlFor="phoneNumber1">Phone Number 1</label>
            <br />
            <input
              type="number"
              name="phoneNumber1"
              placeholder="Enter your phone number..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber1}
            />
            {errors.phoneNumber1 && touched.phoneNumber1 && (
              <p className={styles.validationError}>{errors.phoneNumber1 as string}</p>
            )}
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="phoneNumber2">Phone Number 2</label>
            <br />
            <input
              type="number"
              name="phoneNumber2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber2}
            />
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="phoneNumber3">Phone Number 3</label>
            <br />
            <input
              type="number"
              name="phoneNumber3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber3}
            />
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="phoneNumber4">Phone Number 4</label>
            <br />
            <input
              type="number"
              name="phoneNumber4"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber4}
            />
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left">
            <label htmlFor="phoneNumber5">Phone Number 5</label>
            <br />
            <input
              type="number"
              name="phoneNumber5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber5}
            />
          </Grid>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="country">Country</label>
            <br />
            <select
              ref={selectRef}
              name="country"
              id="country"
              onClick={() => dispatch(getAllCountries())}
              value={values.country}
              onChange={e => setFieldValue('country', e.target.value)}
              onBlur={handleBlur}
            >
              <option value="" disabled selected hidden>
                Select a country
              </option>
              {data.map((country, index) => (
                <option key={index} value={country.country} label={country.country} />
              ))}
            </select>
            <AiOutlineDown />
            {errors.country && touched.country && <p className={styles.validationError}>{errors.country as string}</p>}
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} sx={{ justifyContent: { md: 'center' } }} mt={3}>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="province">Province</label>
            <br />
            <select
              name="province"
              id="province"
              ref={selectRef}
              value={values.province}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected hidden>
                Select a province
              </option>
              {provinces &&
                provinces[0].map((province, index) => <option key={index} value={province} label={province} />)}
            </select>
            <AiOutlineDown />
            {errors.province && touched.province && (
              <p className={styles.validationError}>{errors.province as string}</p>
            )}
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="doc">Date Of Creation</label>
            <br />
            <input type="date" name="doc" value={values.doc} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} mt={3} sx={{ justifyContent: { md: 'center' } }}>
          <Grid item textAlign="left" position="relative">
            <label htmlFor="address">Address</label>
            <br />
            <input
              type="text"
              name="address"
              placeholder="Enter your address..."
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address && <p className={styles.validationError}>{errors.address as string}</p>}
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="facebook">Facebook</label>
            <br />
            <input
              type="text"
              name="facebook"
              placeholder="Enter facebook username..."
              value={values.facebook}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container position="relative" gap={4} mt={3} sx={{ justifyContent: { md: 'center' } }}>
          <Grid item textAlign="left">
            <label htmlFor="instagram">Instagram</label>
            <br />
            <input
              type="text"
              name="instagram"
              placeholder="Enter instagram username..."
              value={values.instagram}
              onChange={handleChange}
            />
          </Grid>
          <Grid item textAlign="left">
            <label htmlFor="twitter">Twitter</label>
            <br />
            <input
              type="text"
              name="twitter"
              placeholder="Enter twitter username..."
              value={values.twitter}
              onChange={handleChange}
            />
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
            />
            {errors.brief && <p className={styles.validationError}>{errors.brief as string}</p>}
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

export default InstitutionSettings;
