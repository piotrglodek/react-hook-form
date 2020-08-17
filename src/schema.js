import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must have at least 5 characters'),
  repeatPassword: yup
    .string()
    .required('Password confiramtion is required')
    .min(5, 'Password must have at least 5 characters')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const schemaDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};
