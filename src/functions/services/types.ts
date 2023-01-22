export interface Auth {
  number: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  cel: number;
  password: string;
  profileImg: string;
  isConnected: string;
  description: string;
  lastTime: string;
}

export interface Message {
  sendBy: number;
  date: string;
  hour: string;
  message: string;
  viewed: boolean;
}

export interface Chat {
  id: number;
  idUserOne: number;
  idUserTwo: number;
  chat: Message[];
}

export interface UpdateUser {
  name?: string;
  profileImg?: string;
}
