import * as yup from 'yup';

export const VALIDATE_LOGIN = yup.object().shape({
  cel: yup.number().required('Se necesita un número de celular'),
  password: yup.string().required('Se necesita una contraseña'),
});

export const VALIDATE_REGISTER = yup.object().shape({
  name: yup.string().required('Se debe dar un nombre'),
  cel: yup.string().required('Se necesita un número de celular'),
  password: yup.string().required('Se requiere una contraseña'),
  profileImg: yup.string().required('Debe haber una foto de perfil'),
  description: yup.string(),
});
