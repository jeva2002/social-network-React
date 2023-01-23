import { getUser } from '../services';
import Swal from 'sweetalert2';

export const handleLogin = async (cel: number, password: string) => {
  const user = await getUser('cel', cel);
  console.log(user)
  if (user.status <= 400) {
    if (user.data[0].password === password) {
      return user.data[0];
    } else {
      Swal.fire('La contraseña es incorrecta');
      return undefined;
    }
  } else {
    Swal.fire('El usuario es incorrecto');
    return undefined;
  }
};
