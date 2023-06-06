import { AiOutlineDown, AiOutlineLeft } from 'react-icons/ai';
import { AppDispatch, RootState } from 'redux/store';
import { Button, Fade, Grid } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { createUser, getCurrentUser } from 'redux/actions/userActions';
import { institutionImg, logo2 } from 'assets';
import { useDispatch, useSelector } from 'react-redux';

import Loading from 'components/Loading/Loading';
import { Paths } from 'constants/paths';
import { getAllCountries } from 'redux/actions/countresAction';
import { getAllProvinces } from 'utils/getAllProvinces';
import { institutionValidation } from 'utils/institutionValidation';
import styles from './Institution.module.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

interface Props {
  onReturn: () => void;
}

const Institution: FC<Props> = ({ onReturn }) => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>();
  const provinces = getAllProvinces(selectedCountryIndex ?? 0);
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.countriesReducer);
  const { success, loading } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue } = useFormik({
    initialValues: {
      institutionName: '',
      institutionType: '',
      email: '',
      password: '',
      country: '',
      province: '',
      phoneNumber1: '',
      phoneNumber2: '',
      phoneNumber3: '',
      phoneNumber4: '',
      phoneNumber5: '',
      address: '',
      facebook: '',
      instagram: '',
      twitter: '',
      brief: '',
      image: '',
      count: 0,
      rating: 0,
      type: 'institution',
    },
    validationSchema: institutionValidation,
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
    <form className={styles.institutionContainer} onSubmit={handleSubmit}>
      <Fade in timeout={{ enter: 1000 }}>
        <Grid className={styles.institutionCard} container justifyContent="space-between" alignItems="center">
          <AiOutlineLeft className={styles.back} size={32} onClick={onReturn} />
          <Grid item>
            <img className={styles.leftImg} src={institutionImg} alt="institutionImg" />
          </Grid>
          <Grid item>
            <img className={styles.logo} src={logo2} alt="logo" />
            <p className={styles.title}>Create An Institution Account</p>
            <div className={styles.formContainer}>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="institutionName">Institution Name</label>
                  <br />
                  <input
                    type="text"
                    name="institutionName"
                    placeholder="Enter institution name..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.institutionName && touched.institutionName && (
                    <p className={styles.validationError}>{errors.institutionName}</p>
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
                  >
                    <option value="" disabled selected hidden>
                      Select an institution type
                    </option>
                    <option value="School" label="School" />
                    <option value="Academy" label="Academy" />
                    <option value="University" label="University" />
                    <option value="Public Library" label="Public Library" />
                    <option value="Training Center" label="Training Center" />
                    <option value="Other" label="Other" />
                  </select>
                  <AiOutlineDown className={styles.dropdownIcon} onClick={() => selectRef.current?.click()} />
                  {errors.institutionType && touched.institutionType && (
                    <p className={styles.validationError}>{errors.institutionType}</p>
                  )}
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
                  <label htmlFor="phoneNumber1">Phone Number 1</label>
                  <br />
                  <input
                    type="text"
                    name="phoneNumber1"
                    placeholder="Enter your phone number..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.phoneField}
                  />
                  {errors.phoneNumber1 && touched.phoneNumber1 && (
                    <p className={styles.validationError}>{errors.phoneNumber1}</p>
                  )}
                </Grid>
                <Grid item textAlign="left">
                  <label htmlFor="phoneNumber2">Phone Number 2</label>
                  <br />
                  <input type="text" name="phoneNumber2" onChange={handleChange} />
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="phoneNumber3">Phone Number 3</label>
                  <br />
                  <input type="text" name="phoneNumber3" onChange={handleChange} />
                </Grid>
                <Grid item textAlign="left">
                  <label htmlFor="phoneNumber4">Phone Number 4</label>
                  <br />
                  <input type="text" name="phoneNumber4" onChange={handleChange} />
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left">
                  <label htmlFor="phoneNumber5">Phone Number 5</label>
                  <br />
                  <input type="text" name="phoneNumber5" onChange={handleChange} />
                </Grid>
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
              </Grid>
              <Grid container position="relative" gap={2} sx={{ justifyContent: { md: 'center' } }} mt={3}>
                <Grid item textAlign="left" position="relative">
                  <label htmlFor="province">Province</label>
                  <br />
                  <select
                    disabled={!values.country}
                    ref={selectRef}
                    name="province"
                    id="province"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                <Grid item textAlign="left">
                  <label htmlFor="doc">Date Of Creation</label>
                  <br />
                  <input type="date" name="doc" onChange={handleChange} />
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} mt={3} sx={{ justifyContent: { md: 'center' } }}>
                <Grid item textAlign="left" position="relative">
                  <label htmlFor="address">Address</label>
                  <br />
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && <p className={styles.validationError}>{errors.address}</p>}
                </Grid>
                <Grid item textAlign="left">
                  <label htmlFor="facebook">Facebook</label>
                  <br />
                  <input type="text" name="facebook" placeholder="Enter facebook username..." onChange={handleChange} />
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} mt={3} sx={{ justifyContent: { md: 'center' } }}>
                <Grid item textAlign="left">
                  <label htmlFor="instagram">Instagram</label>
                  <br />
                  <input
                    type="text"
                    name="instagram"
                    placeholder="Enter instagram username..."
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item textAlign="left">
                  <label htmlFor="twitter">Twitter</label>
                  <br />
                  <input type="text" name="twitter" placeholder="Enter twitter username..." onChange={handleChange} />
                </Grid>
              </Grid>
              <Grid container position="relative" gap={2} mt={3} sx={{ justifyContent: { md: 'center' } }}>
                <Grid item textAlign="left" position="relative">
                  <label htmlFor="brief">Brief</label>
                  <br />
                  <textarea
                    name="brief"
                    id="brief"
                    placeholder="Enter your brief..."
                    cols={30}
                    rows={10}
                    onChange={handleChange}
                  />
                  {errors.brief && <p className={styles.validationError}>{errors.brief}</p>}
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

export default Institution;
