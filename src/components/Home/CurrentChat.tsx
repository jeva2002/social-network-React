import { useEffect, useState } from 'react';
import { getUser } from '../../functions/services';
import { Chat, User } from '../../functions/services/types';
import MessageComponent from './CurrentChat/Message';
import search from '../../assets/search.svg';
import arrow from '../../assets/arrow-left.svg';
import ChatOptions from './CurrentChat/ChatOptions';

interface Props {
  contactId: number | undefined;
  chat: Chat | undefined;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  chatActive: boolean;
}

const CurrentChat: React.FunctionComponent<Props> = ({
  contactId,
  chat,
  setChatActive,
  chatActive,
}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser('id', contactId ?? '')
      .then((res) => setUser(res))
      .catch((e) => console.log(e));
  }, [contactId]);

  return (
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
          <img className='click' src={search} alt='Search Icon' />
        </div>
      </section>
      <section
        className='d-flex flex-column'
        style={{ backgroundColor: '#eee', minHeight: '75vh', overflow: 'auto' }}
      >
        {chat?.chat.map((message, index) => {
          return (
            <MessageComponent
              key={index}
              message={message}
              contactId={contactId}
            />
          );
        })}
      </section>
      <ChatOptions />
    </div>
  );
};

export default CurrentChat;
