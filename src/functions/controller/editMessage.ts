import { modifyChat } from '../services';
import { Chat, Message } from '../services/types';

export const deleteChat = async (message: Message, chat: Chat | undefined) => {
  if (chat) {
    const newChat = chat;
    newChat.chat = chat?.chat.filter((e) => e !== message);
    return await modifyChat(chat.id, newChat);
  }
};
