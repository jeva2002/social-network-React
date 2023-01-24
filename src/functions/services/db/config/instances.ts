import { collection } from 'firebase/firestore';
import { database } from '../../../../App';

export const usersCollection = collection(database, 'users');
export const chatsCollection = collection(database, 'chats');
