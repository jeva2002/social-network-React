import baseInstance from './config/axiosInstance';
import routes from './config/routes';
import { Chat } from './types';

export const seeMessages = async (
  chat: Chat | undefined,
) => {
  if (chat)
    return await(
      await baseInstance.put(
        routes.messages.index + chat.id,
        chat
      )
    ).data;
};

export const putChat = async (id: number, newChat: Chat) => {
  return await (
    await baseInstance.put(routes.messages.index + newChat.id, newChat)
  ).data;
};

