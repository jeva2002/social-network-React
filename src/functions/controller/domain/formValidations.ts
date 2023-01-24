import * as yup from 'yup';

export const VALIDATE_LOGIN = yup.object().shape({
  email: yup.string().required('Se necesita un correo electrónico'),
  password: yup.string().required('Se necesita una contraseña'),
});

export const VALIDATE_REGISTER = yup.object().shape({
  firstname: yup.string().required('Se debe dar un nombre'),
  lastname: yup.string().required('Se debe dar un apellido'),
  email: yup.string().required('Se debe dar un correo electrónico'),
  cel: yup.string().required('Se necesita un número de celular'),
  password: yup.string().required('Se requiere una contraseña'),
  profileImg: yup.string().required('Debe haber una foto de perfil'),
  description: yup.string(),
});
