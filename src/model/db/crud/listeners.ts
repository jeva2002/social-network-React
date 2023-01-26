import {
  doc,
  DocumentData,
  onSnapshot,
} from 'firebase/firestore';
import { database } from '../../../App';
import { collections } from '../config';

export const listenDoc = (
  currentUserId: string,
  cb: (doc: DocumentData | undefined, id: string) => void
) => {
  onSnapshot(
    doc(database, collections.users, currentUserId),
    (doc) => {
      const data = doc.data();
      if(data) {
        cb(data, currentUserId)
      }
      else {
        throw console.log('Algo falló en el listener');
      }
    }
  );
};
