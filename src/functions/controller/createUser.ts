import { createUser } from '../services';
import { IValues } from '../services/types';
import { DateTime } from 'luxon';
import Swal from 'sweetalert2';

export const handleRegister = (user: IValues) => {
  try {
    const date = new Date();
    const newUser = {
      ...user,
      isConnected: false,
      lastTime: date.toLocaleDateString('en-US', DateTime.DATE_SHORT),
    };
    createUser(newUser);
    Swal.fire('Usuario creado correctamente');
  } catch (error) {
    Swal.fire('Ha ocurrido un error');
  }
};
