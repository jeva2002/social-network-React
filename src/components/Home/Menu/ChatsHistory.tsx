import { useEffect } from 'react';
import { Chat, User } from '../../../functions/services/types';
import MiniatureChat from './MiniatureChat';
import UseFilter from './UseFilter';

interface Props {
  chatsList: Chat[] | undefined;
  userId: number | undefined;
  setCurrentChat: React.Dispatch<React.SetStateAction<Chat | undefined>>;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<User[]>>;
  contacts: User[];
  filter: string;
}

const ChatsHistory: React.FunctionComponent<Props> = ({
  chatsList,
  userId,
  setCurrentChat,
  setChatActive,
  setContacts,
  filter,
  contacts,
}) => {
  useEffect(() => {
    setCurrentChat(chatsList ? chatsList[0] : undefined);
  }, []);

  return (
    <section
      className='container-fluid d-flex flex-column px-2 m-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {!filter
        ? chatsList?.map((chat) => {
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
          })
        : UseFilter(
            filter,
            contacts,
            chatsList,
            setCurrentChat,
            setChatActive,
            setContacts,
            userId
          )}
    </section>
  );
};

export default ChatsHistory;
