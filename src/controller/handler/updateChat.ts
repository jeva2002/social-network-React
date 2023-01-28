import { FirebaseError } from 'firebase/app';
import Swal from 'sweetalert2';
import { collections } from '../../model/db/config';
import { getOne, update } from '../../model/db/crud';
import { Chat, Message } from '../../model/types';
import { DateTime } from 'luxon';

const updateChat = async (id: string, data: Message) => {
  await update(id, collections.chats, data);
};

export const sendMessage = async (
  chatId: string,
  currentUserId: string,
  message: string
) => {
  try {
    const newMessage: Message = {
      message: message,
      date: new Date().toLocaleDateString('en-US', DateTime.DATE_SHORT),
      hour: new Date().toLocaleDateString('en-US', DateTime.TIME_24_SIMPLE),
      sendBy: currentUserId,
      viewed: false,
    };
    const chat = await getOne(collections.chats, chatId);
    chat?.messages.push(newMessage);
    await update(chatId, collections.chats, chat);
    
  } catch (error: Error | FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      Swal.fire(error.message);
    } else if (error instanceof Error) {
      console.log(error);
      Swal.fire(error.message);
    } else Swal.fire('Algo ha fallado');
  }
};
