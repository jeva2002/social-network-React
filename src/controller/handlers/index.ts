import handleLogin from './login';
import handleRegister from './register';
import addContactHandler from './addContact';
import { getContacts, getActiveChats } from './getChat';
import { updateCurrentUser } from './updateCurrentUser';
import { sendMessage, deleteMessage } from './updateChat';

export {
  handleLogin,
  handleRegister,
  addContactHandler,
  getContacts,
  getActiveChats,
  updateCurrentUser,
  sendMessage,
  deleteMessage
};
