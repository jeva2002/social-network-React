import { Chat } from './types';
import baseInstance from './config/axiosInstance';
import routes from './config/routes';

export const modifyChat = async (id: number, newChat: Chat) => {
  return await (
    await baseInstance.put(routes.messages.index + newChat.id, newChat)
  ).data;
};
