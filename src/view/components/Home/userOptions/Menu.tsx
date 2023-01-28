import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactData } from '../../../../model/types';
import AddContacts from './Menu/AddContacts';
import ChatsList from './Menu/common/ChatsList';
import Filter from './Menu/common/Filter';
import Nav from './Menu/Nav';

const selectView = (
  view: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>,
  filter: string,
  contactsList: ContactData[],
  activeChatsList: ContactData[],
  setActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (view) {
    case 'addContact':
      return <AddContacts />;
    case 'contactsList':
      return (
        <>
          <Filter setFilter={setFilter} />
          <ChatsList
            setActive={setActive}
            filter={filter}
            list={contactsList}
            lastMessage={true}
          />
        </>
      );
    default:
      return (
        <>
          <Filter setFilter={setFilter} />
          <ChatsList
            setActive={setActive}
            filter={filter}
            list={activeChatsList}
            lastMessage={false}
          />
        </>
      );
  }
};

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FunctionComponent<Props> = ({ active, setActive }) => {
  const view = useSelector((state: any) => state.menuView.currentView);
  const contacts: ContactData[] = useSelector(
    (state: any) => state.contacts.contactData
  );
  const activeChats: ContactData[] = useSelector(
    (state: any) => state.activeChats.activeChats
  );

  const [filter, setFilter] = useState('');

  return (
    <aside
      className={`${
        active ? '' : 'hidden'
      } menu-home container-fluid col-md-4 col-12 p-0 m-0`}
    >
      <Nav />
      {selectView(view, setFilter, filter, contacts, activeChats, setActive)}
    </aside>
  );
};

export default Menu;
