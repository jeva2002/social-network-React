import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { User } from '../services/types';
import { getUser } from '../services';
import Swal from 'sweetalert2';

export const handleLogin = async (
  cel: number,
  password: string,
) => {
  const user = await getUser('cel', cel);
  if (user) {
    if (user.password === password) {
      return user;
    } else {
      Swal.fire('La contraseña es incorrecta')
      return undefined;
    };
  } else {
    return undefined;
  }
};
