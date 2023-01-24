import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

export interface Auth {
  email: string;
  password: string;
}

export interface IValues {
  name: string;
  cel: number | string;
  password: string;
  profileImg: string;
  description: string;
}

export interface ICurrentUser {
  currentUser: { id: string } | null;
}

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  cel: string | number;
  password: string;
  profileImg?: string;
  description?: string;
  isConnected?: string;
  lastTime?: string;
  chats?: [];
}

export interface Message {
  sendBy: number;
  date: string;
  hour: string;
  message: string;
  viewed: boolean;
}

export interface Chat {
  idUserOne: string;
  idUserTwo: string;
  chat: Message[];
}

export interface UpdateUser {
  name?: string;
  profileImg?: string;
}
