import { seeMessages } from '../services';
import { Chat } from '../services/types';

const setViews = (
  chat: Chat | undefined,
  contactId: number | undefined
) => {
  if (chat && contactId) {
    const newChat = chat;
    newChat.chat = chat.chat.map((e) => {
      if (e.sendBy === contactId) {
        e.viewed = true;
        return e;
      } else return e;
    });
    return newChat;
  }
};

export const handleOpenChat = (
  chat: Chat | undefined,
  contactId: number | undefined
) => {
  return seeMessages(setViews(chat, contactId))
};
