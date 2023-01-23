import { useEffect, useState } from 'react';
import { getUserById } from '../../functions/services';
import { Chat, Message, User } from '../../functions/services/types';
import MessageComponent from './CurrentChat/Message';
import search from '../../assets/search.svg';
import arrow from '../../assets/arrow-left.svg';
import ChatOptions from './CurrentChat/ChatOptions';
import {
  deleteMessage,
  editMessage,
  handleNewMessage,
  handleOpenChat,
} from '../../functions/controller';
import SearchMessage from './CurrentChat/SearchMessage';

interface Props {
  contactId: number | undefined;
  chat: Chat | undefined;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  chatActive: boolean;
  setModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const CurrentChat: React.FunctionComponent<Props> = ({
  contactId,
  chat,
  setChatActive,
  chatActive,
  setModify,
}) => {
  const [user, setUser] = useState<User>();
  const [messageDetail, setMessageDetail] = useState(false);

  const handleSubmit = (_text: string) => {
    if (chat)
      return handleNewMessage(
        _text,
        contactId === chat?.idUserOne ? chat?.idUserTwo : chat?.idUserOne,
        chat
      )?.then(() => setModify((value) => !value));
  };

  const handleDeleteMessage = (message: Message) => {
    deleteMessage(message, chat).then(() => setModify((value) => !value));
  };

  const handleEditMessage = (text: string, message: Message) => {
    editMessage(text, message, chat).then(() => setModify((value) => !value));
  };

  useEffect(() => {
    getUserById(contactId)
      .then((res) => setUser(res))
      .catch((e) => console.log(e));
  }, [contactId]);

  useEffect(() => {
    handleOpenChat(chat, user?.id);
  }, [chat, user]);

  return (
    <>
      <div
        className={`col-md-8 col-12 d-flex flex-column justify-content-center ${
          chatActive ? '' : 'hidden'
        }`}
      >
        <section
          className='d-flex align-items-center justify-content-between'
          style={{
            backgroundColor: '#f6f6f6',
          }}
        >
          <div className='d-flex py-2 ps-5 gap-3'>
            <img
              className={`click d-md-none`}
              src={arrow}
              alt='Regresar'
              onClick={() => {
                setChatActive(false);
              }}
            />
            <img
              className='profile click'
              src={user?.profileImg}
              alt='Profile Pic'
            />
            <div>
              <h2 style={{ fontSize: 23 }}>{user?.name}</h2>
              <h3 style={{ fontSize: 18, fontWeight: 'lighter' }}>
                {user?.isConnected ? 'En Línea' : 'Desconectado'}
              </h3>
            </div>
          </div>
          <div className='me-5'>
            <img
              className='click'
              src={search}
              alt='Search Icon'
              onClick={() => {
                setMessageDetail(!messageDetail);
              }}
            />
          </div>
        </section>
        <section
          style={{
            backgroundColor: '#eee',
            height: '76vh',
            overflowY: 'scroll',
          }}
        >
          <div className='d-flex flex-column'>
            {chat?.chat.map((message, index) => {
              return (
                <MessageComponent
                  key={index}
                  message={message}
                  contactId={contactId}
                  handleDeleteMessage={handleDeleteMessage}
                  handleEditMessage={handleEditMessage}
                />
              );
            })}
          </div>
        </section>
        <ChatOptions handleSubmit={handleSubmit} />
      </div>
      {messageDetail ? (
        <SearchMessage
          chat={chat}
          user={user}
          setMessageDetail={setMessageDetail}
          style={`position-absolute col-md-4 col-12 ${chatActive ? '' : 'hidden'}`}
        />
      ) : null}
    </>
  );
};

export default CurrentChat;
