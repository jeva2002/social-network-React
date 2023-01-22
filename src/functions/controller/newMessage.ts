import { DateTime } from 'luxon';
import { getChatById, sendMessage } from '../services';
import { Chat, Message } from '../services/types';

const formatMessage = (text: string, userId: number) => {
  const date = new Date();
  return {
    date: date.toLocaleString('en-US', DateTime.DATE_SHORT),
    hour: date.toLocaleString('en-US', DateTime.TIME_24_SIMPLE),
    message: text,
    sendBy: userId,
    viewed: false,
  };
};

export const handleNewMessage = (
  text: string,
  userId: number | undefined,
  chat: Chat | undefined,
) => {
  if (userId && chat) {
    const newMessage = formatMessage(text, userId);
    chat.chat.push(newMessage);
    return sendMessage(chat.id, chat);
  }
};
