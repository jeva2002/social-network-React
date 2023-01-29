import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../../App';

export const deleteDocument = async (id: string, collection: string) =>
  await deleteDoc(doc(database, collection, id));
