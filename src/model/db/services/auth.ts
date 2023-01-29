import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../App';

export const authenticateUser = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
};
