export interface Auth {
  email: string;
  password: string;
}

export interface NewContact {
  contact?: string;
  cel: number | string;
}

export interface Contact {
  contact: string;
  cel: number | string;
}

export interface ICurrentUser {
  currentUser: { id: string } | null;
}

export interface UpdateUser {
  firstname?: string;
  lastname?: string;
  email?: string;
  cel?: string | number;
  password?: string;
  profileImg?: string;
  description?: string;
  isConnected?: boolean;
  lastTime?: string;
  chats?: any[];
  contacts?: any[];
}

export interface NewUser {
  firstname: string;
  lastname: string;
  email: string;
  cel: string | number;
  password: string;
  profileImg?: string;
  description?: string;
  isConnected?: boolean;
  lastTime?: string;
  chats?: any[];
  contacts?: any[];
}

export interface ContactData {
  cel: number;
  description: string;
  id: string;
  profileImg: string;
  chat: [];
}