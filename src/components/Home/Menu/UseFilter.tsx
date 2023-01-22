import { Chat, User } from "../../../functions/services/types";
import MiniatureChat from "./MiniatureChat";

const UseFilter = (
  filter: string,
  contacts: User[],
  chatsList: Chat[] | undefined,
  setCurrentChat: React.Dispatch<React.SetStateAction<Chat | undefined>>,
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>,
  setContacts: React.Dispatch<React.SetStateAction<User[]>>,
  userId: number | undefined
) => {
  const filteredUsers = contacts?.filter((e) =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (filteredUsers) {
    const chats = chatsList?.filter((chat) =>
      filteredUsers.find(
        (e) => chat.idUserOne === e.id || chat.idUserTwo === e.id
      )
    );
    return chats?.map((chat) => {
      return (
        <MiniatureChat
          key={`${chat.idUserOne}-${chat.idUserTwo}`}
          chat={chat}
          userId={userId}
          setCurrentChat={setCurrentChat}
          setChatActive={setChatActive}
          setContacts={setContacts}
        />
      );
    });
  }
};

export default UseFilter;