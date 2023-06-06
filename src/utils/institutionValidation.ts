import * as Yup from 'yup';

import { phoneRegExp } from './phoneRegExp';

export const institutionValidation = Yup.object().shape({
  institutionName: Yup.string().required('Institution name is required'),
  institutionType: Yup.string().required('Institution type is required'),
  doc: Yup.string().required('Date of creation is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  country: Yup.string().required('Country is required'),
  province: Yup.string().required('Province is required'),
  phoneNumber1: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  phoneNumber2: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  phoneNumber3: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  phoneNumber4: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  phoneNumber5: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  address: Yup.string().required('Address is required'),
  facebook: Yup.string(),
  instagram: Yup.string(),
  twitter: Yup.string(),
  brief: Yup.string().required('Brief is required').max(500, 'Brief must be under 500 characters'),
});
