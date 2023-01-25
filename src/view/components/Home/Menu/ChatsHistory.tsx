import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../../../../model/types';
import Chat from './ChatsHistory/Chat';

interface Props {}

const ChatsHistory: React.FunctionComponent<Props> = () => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [contactsList, setContactsList] = useState<Contact[]>(
    currentUser.contacts
  );

  return (
    <menu
      className='container-fluid d-flex flex-column px-2 m-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {contactsList.map((contact) => {
        return <Chat key={contact.cel} contact={contact}/>;
      })}
    </menu>
  );
};

export default ChatsHistory;
