import { VALIDATE_LOGIN } from './formValidations';
import { handleNewMessage } from './newMessage';
import { handleOpenChat } from './putMessagesViews';
import { handleLogin } from './validateUser';
import { deleteMessage, editMessage } from './editMessage';
import { handleRegister } from './createUser';

export {
  VALIDATE_LOGIN,
  handleLogin,
  handleNewMessage,
  handleOpenChat,
  deleteMessage,
  editMessage,
  handleRegister
};
