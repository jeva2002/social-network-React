import {
  CollectionReference,
  doc,
  DocumentData,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { database } from '../../../App';
import { createQuery, queryOperators } from '../config';

export const getAll = async (collection: CollectionReference<DocumentData>) => {
  const data = await getDocs(collection);
  return data.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};

export const getWithQuery = async (
  collection: CollectionReference<DocumentData>,
  key: string,
  operator: queryOperators,
  value: any
) => {
  const q = createQuery(collection, key, operator, value);
  const data = await getDocs(q);
  return data.docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
};

export const getOne = async (collection: string, id: string) => {
  const data = await getDoc(doc(database, collection, id));
  return data.data();
}
  
