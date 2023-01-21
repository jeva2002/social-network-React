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
  date: Date;
  hour: Date;
  message: string;
  viewed: boolean;
}

export interface Chat {
  idUserOne: number;
  idUserTwo: number;
  chat: Message[];
}
