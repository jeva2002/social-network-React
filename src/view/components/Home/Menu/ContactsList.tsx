import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../../../../controller/handler';
import { Contact, ContactData } from '../../../../model/types';
import Chat from './common/Chat';

interface IAppProps {}

const ContactsList: React.FunctionComponent<IAppProps> = (props) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [contactsList, setContactsList] = useState<(ContactData | undefined)[]>(
    []
  );

  useEffect(() => {
    const contacts: Contact[] = currentUser.contacts;
    getContacts(contacts.map((contact) => Number(contact.cel))).then((res) =>
      setContactsList(res)
    );
  }, [currentUser.contacts]);

  return (
    <menu
      className='container-fluid d-flex flex-column px-2 m-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {contactsList?.map((contact, index) => {
        return (
          <Chat
            key={index}
            contact={contact}
            currentUser={currentUser}
            lastMessage={true}
          />
        );
      })}
    </menu>
  );
};

export default ContactsList;
