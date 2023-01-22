import baseInstance from './config/axiosInstance';
import routes from './config/routes';
import { Chat } from './types';

export const seeMessages = async (
  chat: Chat | undefined,
) => {
  if (chat)
    return await(
      await baseInstance.patch(
        routes.messages.index + chat.id,
        {...chat}
      )
    ).data;
};
