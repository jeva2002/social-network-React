import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactData } from '../../../model/types';
import AddContacts from './Menu/AddContacts';
import ChatsList from './Menu/common/ChatsList';
import Filter from './Menu/common/Filter';
import CurrentUserProfile from './Menu/CurrentUserProfile';

const selectView = (
  view: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>,
  filter: string,
  contactsList: ContactData[],
  activeChatsList: ContactData[]
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
  const view = useSelector((state: any) => state.menuView.currentView);
  const contacts: ContactData[] = useSelector(
    (state: any) => state.contacts.contactData
  );
  const activeChats: ContactData[] = useSelector(
    (state: any) => state.activeChats.activeChats
  );

  const [filter, setFilter] = useState('');

  return (
    <aside className={`menu-home container-fluid col-md-4 col-12 p-0 m-0`}>
      <CurrentUserProfile />
      {selectView(view, setFilter, filter, contacts, activeChats)}
    </aside>
  );
};

export default Menu;
