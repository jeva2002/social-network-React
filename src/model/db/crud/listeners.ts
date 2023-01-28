import { doc, DocumentData, onSnapshot } from 'firebase/firestore';
import { database } from '../../../App';

export const listenDoc = (
  currentId: string,
  collection: string,
  cb: (doc: DocumentData | undefined, id: string) => void
) => {
  return onSnapshot(
    doc(database, collection, currentId),
    (doc) => {
      const data = {...doc.data(), id: doc.id};
      if (data) {
        cb(data, currentId)
      }
    },
    (err) => {
      console.log(err);
    }
  );
};
