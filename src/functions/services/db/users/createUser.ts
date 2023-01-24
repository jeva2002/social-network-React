import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import { auth } from '../../../../App';
import { User } from '../../../controller/domain/types';
import { usersCollection } from '../config/instances';

export const createUserAccount = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const createUserDoc = async (user: User) =>
  await addDoc(usersCollection, user);
