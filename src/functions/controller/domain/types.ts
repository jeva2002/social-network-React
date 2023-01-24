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
