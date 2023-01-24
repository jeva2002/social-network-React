import { VALIDATE_LOGIN } from './formValidations';
import { handleNewMessage } from './newMessage';
import { handleOpenChat } from './putMessagesViews';
import { deleteMessage, editMessage } from './editMessage';
import handleRegister from './register';
import handleLogin from './login';

export {
  VALIDATE_LOGIN,
  handleLogin,
  handleNewMessage,
  handleOpenChat,
  deleteMessage,
  editMessage,
  handleRegister,
};
