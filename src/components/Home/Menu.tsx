import { disconnect } from '../../functions/services';
import { useState, useEffect } from 'react';
import close from '../../assets/x.svg';
import {getChats} from '../../functions/services/';
import { Chat, User } from '../../functions/services/types';
import ChatsHistory from './Menu/ChatsHistory';
import Filter from './Menu/Filter';
import { useNavigate } from 'react-router-dom';

interface Props {
  user: User | undefined;
  setCurrentChat: React.Dispatch<React.SetStateAction<Chat | undefined>>;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  chatActive: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FunctionComponent<Props> = ({
  user,
  setCurrentChat,
  setChatActive,
  chatActive,
  setProfile,
}) => {
  const [chatsList, setChatsList] = useState<Chat[]>();
  const [contacts, setContacts] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    getChats(user?.id)
      .then((res) => {
        setChatsList(res);
        setCurrentChat(res[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <menu
      className={`menu-home container-fluid col-md-4 col-12 p-0 m-0 ${
        chatActive ? 'hidden' : ''
      }`}
    >
      <section
        className='px-4 py-2 d-flex justify-content-between gap-1'
        style={{
          backgroundColor: '#f6f6f6',
        }}
      >
        <img
          className='profile'
          src={user?.profileImg}
          alt='Profile pic'
          onClick={() => setProfile(true)}
          style={{
            cursor: 'pointer',
          }}
        />
        <img
          src={close}
          alt='Cerrar sesión'
          style={{ width: 35, cursor: 'pointer' }}
          onClick={() => {
            disconnect(user?.id);
            navigate('/');
          }}
        />
      </section>
      <Filter setFilter={setFilter} />
      <ChatsHistory
        chatsList={chatsList}
        userId={user?.id}
        setCurrentChat={setCurrentChat}
        setChatActive={setChatActive}
        setContacts={setContacts}
        contacts={contacts}
        filter={filter}
      />
    </menu>
  );
};

export default Menu;
