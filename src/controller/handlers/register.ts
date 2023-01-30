import { createAccount, createDoc } from '../../model/db/services';
import { NewUser } from '../../types';
import { DateTime } from 'luxon';
import { usersCollection } from '../../model/db/config';
import Swal from 'sweetalert2';
import { FirebaseError } from 'firebase/app';

const handleRegister = async (user: NewUser) => {
  try {
    await createAccount(user.email, user.password || '');
    await createDoc(usersCollection, {
      ...user,
      password: '',
      chats: [],
      contacts: [],
      isConnected: false,
      lastTime: new Date().toLocaleDateString('en-US', DateTime.DATE_SHORT),
    });
    Swal.fire('Usuario creado correctamente');
  } catch (error) {
    if (error instanceof FirebaseError) {
      Swal.fire(error.message);
    } else Swal.fire('Algo ha fallado');
    throw error;
  }
};

export default handleRegister;
