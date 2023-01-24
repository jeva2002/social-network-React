import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../../App';
import { Chat, User } from '../../types';

export const update = async (id: string, data: User | Chat) =>
  await updateDoc(doc(database, 'users', id), { ...data });
