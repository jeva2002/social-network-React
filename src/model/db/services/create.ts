import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, CollectionReference, DocumentData } from 'firebase/firestore';
import { auth } from '../../../App';
import { NewUser } from '../../../types';

export const createAccount = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const createDoc = async (
  collection: CollectionReference<DocumentData>,
  data: NewUser
) => await addDoc(collection, { ...data });
