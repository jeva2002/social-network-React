import { authenticateUser } from '../services/db';
import { Auth } from './domain/types';

const handleLogin = async (values: Auth) => {
  try {
    const auth = await authenticateUser(values.email, values.password);
    const token = await auth.user.getIdToken();
    const date = new Date(1674529787215)
    console.log(date.toLocaleString());
  } catch (error) {
    console.log(error);
  }
};

export default handleLogin;