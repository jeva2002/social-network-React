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
  const contacts: ContactData[] = useSelector(
    (state: any) => state.contacts.contactData
  );

  return (
    <menu
      className='container-fluid d-flex flex-column px-2 m-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {contacts.map((contact) => {
        return (
          <Chat
            key={contact?.id}
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
