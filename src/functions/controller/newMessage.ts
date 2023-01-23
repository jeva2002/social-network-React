import { DateTime } from 'luxon';
import { putChat } from '../services';
import { Chat } from '../services/types';

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
  chat: Chat | undefined
) => {
  if (userId && chat) {
    const newMessage = formatMessage(text, userId);
    chat.chat.push(newMessage);
    return putChat(chat.id, chat);
  }
};
