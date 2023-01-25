// import { disconnect } from '../../functions/services';
// import { useState, useEffect } from 'react';

// import {getChats} from '../../functions/services/';
// import { Chat, User } from '../../functions/services/types';
// import ChatsHistory from './Menu/ChatsHistory';
// import Filter from './Menu/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddContacts from './Menu/AddContacts';
import ChatsHistory from './Menu/ChatsHistory';
import CurrentUserProfile from './Menu/CurrentUserProfile';

interface Props {
  // user: User | undefined;
  // setCurrentChat: React.Dispatch<React.SetStateAction<Chat | undefined>>;
  // setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  // chatActive: boolean;
  // setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const selectView = (view: string) => {
  switch (view) {
    case 'chatHistory':
      
      break;
    case 'addContact':
      return <AddContacts />;
    default:
      break;
  }
}

const Menu: React.FunctionComponent<Props> = () => {
  const view = useSelector((state: any) => state.menuView.currentView)
  const dispatch = useDispatch();
  // const [chatsList, setChatsList] = useState<Chat[]>();
  // const [contacts, setContacts] = useState<User[]>([]);
  // const [filter, setFilter] = useState('');

  // const navigate = useNavigate();

  // useEffect(() => {
  //   getChats(user?.id)
  //     .then((res) => {
  //       setChatsList(res);
  //       setCurrentChat(res[0]);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  console.log(view);
  return (
    <aside
      className={`menu-home container-fluid col-md-4 col-12 p-0 m-0`}
    >
      <CurrentUserProfile />
      <ChatsHistory />
      
      {/* <Filter setFilter={setFilter} />
      <ChatsHistory
        chatsList={chatsList}
        userId={user?.id}
        setCurrentChat={setCurrentChat}
        setChatActive={setChatActive}
        setContacts={setContacts}
        contacts={contacts}
        filter={filter}
      /> */}
    </aside>
  );
};

export default Menu;
