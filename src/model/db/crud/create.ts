import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import { auth } from '../../../App';
import { NewUser } from '../../types';
import { usersCollection } from '../config/instances';

export const createAccount = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const createDoc = async (data: NewUser) =>
  await addDoc(usersCollection, { ...data });
