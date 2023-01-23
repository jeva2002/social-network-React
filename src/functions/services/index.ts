import { connect, disconnect } from './connection';
import { getUser, getContacts, getUserById } from './getUser';
import { modifyUser } from './modifyUser';
import { seeMessages, putChat } from './modifyChat';
import { getChatById, getChats } from './getChats';
import { createUser } from './createUser';

export {
  connect,
  disconnect,
  getUser,
  getContacts,
  modifyUser,
  seeMessages,
  putChat,
  getUserById,
  getChatById,
  getChats,
  createUser
};
