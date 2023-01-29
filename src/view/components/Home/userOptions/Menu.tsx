import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsActive } from '../../../../controller/features';
import {
  getActiveChats,
  getContacts,
} from '../../../../controller/features/chats';
import { ContactData } from '../../../../types';
import AddContacts from './Menu/AddContacts';
import ChatsList from './Menu/common/ChatsList';
import Filter from './Menu/common/Filter';
import Nav from './Menu/Nav';

const selectView = (
  view: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>,
  filter: string,
  contactsList: (ContactData | undefined)[],
  activeChatsList: (ContactData | undefined)[]
) => {
  switch (view) {
    case 'addContact':
      return <AddContacts />;
    case 'contactsList':
      return (
        <>
          <Filter setFilter={setFilter} />
          <ChatsList filter={filter} list={contactsList} lastMessage={true} />
        </>
      );
    default:
      return (
        <>
          <Filter setFilter={setFilter} />
          <ChatsList
            filter={filter}
            list={activeChatsList}
            lastMessage={false}
          />
        </>
      );
  }
};

const Menu: React.FunctionComponent = () => {
  const isActive = useSelector(getIsActive);
  const contacts = useSelector(getContacts);
  const activeChats = useSelector(getActiveChats);

  const [view, setView] = useState('activeChats');
  const [filter, setFilter] = useState('');

  return (
    <aside
      className={`${
        isActive ? '' : 'hidden'
      } menu-home container-fluid col-md-4 col-12 p-0 m-0`}
    >
      <Nav setView={setView} />
      {selectView(view, setFilter, filter, contacts, activeChats)}
    </aside>
  );
};

export default Menu;
