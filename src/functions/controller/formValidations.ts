import * as yup from 'yup';

export const VALIDATE_LOGIN = yup.object().shape({
  cel: yup.number().required('Se necesita un número de celular'),
  password: yup.string().required('Se necesita una contraseña'),
});
