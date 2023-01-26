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

export interface CurrentUserData {
  cel: number;
  description: string;
  email: string;
  firstname: string;
  id: string;
  lastname: string;
  profileImg: string;
  contacts: Contact[];
  chat: string[];
}

export interface Message {
  date: string;
  hour: string;
  message: string;
  sendBy: string;
  viewed: boolean;
}

export interface Chat {
  id: string;
  messages: Message[];
  participants: string[];
}

export interface ContactData {
  cel: number;
  description: string;
  id: string;
  profileImg: string;
  chat: Chat[];
}
