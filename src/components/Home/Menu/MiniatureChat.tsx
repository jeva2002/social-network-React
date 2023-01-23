import { useState, useEffect } from 'react';
import { getUserById } from '../../../functions/services';
import { Chat, User } from '../../../functions/services/types';

interface IMiniatureChat {
  chat: Chat;
  userId: number | undefined;
  setCurrentChat: React.Dispatch<React.SetStateAction<Chat | undefined>>;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<User[]>>;
}

const MiniatureChat: React.FunctionComponent<IMiniatureChat> = ({
  chat,
  userId,
  setCurrentChat,
  setChatActive,
  setContacts,
}) => {
  const [contact, setContact] = useState<User>();

  useEffect(() => {
    getUserById(userId === chat.idUserOne ? chat.idUserTwo : chat.idUserOne)
      .then((res) => {
        setContact(res);
        setContacts((contacts) => {
          if(!contacts.find(e => e.id === res.id)) {
            if (contacts) return [...contacts, res];
            else return [res];
          } else return [...contacts];
        });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <article
      className='d-flex border-bottom py-3 px-2 gap-3'
      style={{ maxHeight: 100, overflow: 'hidden' }}
      onClick={() => {
        setCurrentChat(chat);
        setChatActive(true);
      }}
    >
      <img className='profile' src={contact?.profileImg} alt='Profile pic' />
      <div>
        <h3 style={{ fontSize: 20 }}>{contact?.name}</h3>
        <small>{chat.chat.at(-1)?.message}</small>
      </div>
    </article>
  );
};

export default MiniatureChat;
