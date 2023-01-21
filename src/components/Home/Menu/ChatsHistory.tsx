import { useEffect } from 'react';
import { Chat } from '../../../functions/services/types';
import MiniatureChat from './MiniatureChat';

interface Props {
  chatsList: Chat[] | undefined;
  userId: number | undefined;
  setCurrentChat: React.Dispatch<React.SetStateAction<Chat | undefined>>;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatsHistory: React.FunctionComponent<Props> = ({
  chatsList,
  userId,
  setCurrentChat,
  setChatActive
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
      {chatsList?.map((chat) => {
        return (
          <MiniatureChat
            key={`${chat.idUserOne}-${chat.idUserTwo}`}
            chat={chat}
            userId={userId}
            setCurrentChat={setCurrentChat}
            setChatActive={setChatActive}
          />
        );
      })}
    </section>
  );
};

export default ChatsHistory;
