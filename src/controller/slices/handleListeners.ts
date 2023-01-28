import { DocumentData } from "firebase/firestore";
import { Chat, ContactData } from "../../model/types";

export const handleListenActiveChats = (activeChatId: string, newChat: DocumentData | undefined, activeChats: (ContactData | undefined)[] | any) => {
  if(activeChats.length){
    const currentChat = activeChats.find((e: ContactData | undefined) => e?.id === activeChatId);
    if(currentChat) currentChat.chat = newChat;
    return currentChat;
  }
}