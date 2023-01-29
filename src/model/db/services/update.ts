import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../../App';

export const update = async (id: string, collection: string, data: any) =>
  await updateDoc(doc(database, collection, id), { ...data });
