import {
  query,
  CollectionReference,
  DocumentData,
  where,
} from 'firebase/firestore';

export enum queryOperators {
  equal = '==',
  notEqual = '!=',
  lessThan = '<',
  lessOrEqual = '<=',
  greaterThan = '>',
  greaterOrEqual = '>=',
  arrayContains = 'array-contains',
}

export const createQuery = (
  collection: CollectionReference<DocumentData>,
  key: string,
  operator: queryOperators,
  value: string
) => query(collection, where(key, operator, value));
