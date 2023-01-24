import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import { auth } from '../../../App';
import { Chat, User } from '../../types';
import { usersCollection } from '../config/instances';

export const createAccount = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const createDoc = async (data: User | Chat) =>
  await addDoc(usersCollection, { ...data });
