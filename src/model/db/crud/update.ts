import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../../App';
import { Chat, UpdateUser } from '../../types';

export const update = async (id: string, data: UpdateUser | Chat) =>
  await updateDoc(doc(database, 'users', id), { ...data });
