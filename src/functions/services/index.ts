import { connect, disconnect } from './connection';
import { getUser, getContacts, getUserById } from './getUser';
import { modifyUser } from './modifyUser';
import { seeMessages } from './modifyChat';
import { modifyChat } from './newMessage';
import { getChatById, getChats } from './getChats';

export {
  connect,
  disconnect,
  getUser,
  getContacts,
  modifyUser,
  seeMessages,
  modifyChat,
  getUserById,
  getChatById,
  getChats,
};
