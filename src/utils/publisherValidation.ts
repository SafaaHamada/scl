import * as Yup from 'yup';

import { phoneRegExp } from './phoneRegExp';

export const publisherValidation = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  dob: Yup.date().required('Date of birth is required'),
  gender: Yup.string().required('Gender is required'),
  country: Yup.string().required('Country is required'),
  province: Yup.string().required('Province is required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  workPlaceName: Yup.string(),
  jobTitle: Yup.string().required('Job title is required'),
  specialization: Yup.string().required('Specialization is required'),
  brief: Yup.string().required('Brief is required').max(500, 'Brief must be under 500 characters'),
});
