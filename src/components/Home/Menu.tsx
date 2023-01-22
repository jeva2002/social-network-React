import { useState, useEffect } from 'react';
// import { CurrentUser } from '../../App';
import getChats from '../../functions/services/getChats';
import { Chat, User } from '../../functions/services/types';
import ChatsHistory from './Menu/ChatsHistory';
import Filter from './Menu/Filter';

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
      style={{
        cursor: 'pointer'
      }}
    >
      <section
        className='ps-4 py-2 d-flex justify-content-start gap-1'
        style={{
          backgroundColor: '#f6f6f6',
        }}
      >
        <img
          className='profile'
          src={user?.profileImg}
          alt='Profile pic'
          onClick={() => setProfile(true)}
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
