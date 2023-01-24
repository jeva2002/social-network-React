import { FirebaseError } from 'firebase/app';
import Swal from 'sweetalert2';
import { queryOperators, usersCollection } from '../model/db/config';
import { authenticateUser, getWithQuery } from '../model/db/crud';
import { Auth } from '../model/types';

const handleLogin = async (values: Auth) => {
  try {
    await authenticateUser(values.email, values.password);
    return await getWithQuery(
      usersCollection,
      'email',
      queryOperators.equal,
      values.email
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      Swal.fire(error.message);
    } else Swal.fire('Algo ha fallado');
    throw error;
  }
};

export default handleLogin;
