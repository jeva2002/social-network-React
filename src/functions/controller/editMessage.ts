import { modifyChat } from '../services';
import { Chat, Message } from '../services/types';

export const deleteMessage = async (
  message: Message,
  chat: Chat | undefined
) => {
  if (chat) {
    const newChat = chat;
    newChat.chat = chat?.chat.filter((e) => e !== message);
    return await modifyChat(chat.id, newChat);
  }
};

export const editMessage = async (
  text: string,
  message: Message,
  chat: Chat | undefined
) => {
  if (chat && message.message !== text) {
    const newChat = chat;
    newChat.chat = chat.chat.map((e) => {
      if (e === message) e.message = text;
      return e;
    });
    return await modifyChat(chat.id, newChat);
  }
};
