import { FirebaseError } from 'firebase/app';
import Swal from 'sweetalert2';
import { queryOperators, usersCollection } from '../../model/db/config';
import { authenticateUser, getWithQuery } from '../../model/db/crud';
import { Auth, CurrentUserData } from '../../model/types';

const handleLogin = async (values: Auth) => {
  try {
    await authenticateUser(values.email, values.password);

    const user = await getWithQuery(
      usersCollection,
      'email',
      queryOperators.equal,
      values.email
    );

    const formatedUser: CurrentUserData = {
      cel: user[0].cel,
      description: user[0].description,
      email: user[0].email,
      firstname: user[0].firstname,
      lastname: user[0].lastname,
      id: user[0].id,
      profileImg: user[0].profileImg,
      contacts: user[0].contacts
    };

    Swal.fire(`Bienvenido ${formatedUser.firstname}`);
    return formatedUser;
  } catch (error) {
    if (error instanceof FirebaseError) {
      Swal.fire(error.message);
    } else Swal.fire('Algo ha fallado');
    throw error;
  }
};

export default handleLogin;
