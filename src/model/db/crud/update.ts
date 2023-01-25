import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../../App';
import { UpdateUser } from '../../types';

export const update = async (id: string, data: UpdateUser ) =>
  await updateDoc(doc(database, 'users', id), { ...data });
