import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getActiveChats } from '../../../../controller/handler';
import { ContactData } from '../../../../model/types';
import Chat from './common/Chat';
import Filter from './common/Filter';

const ChatsHistory: React.FunctionComponent = () => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [contactsList, setContactsList] =
    useState<(ContactData | undefined)[]>();

  useEffect(() => {
    getActiveChats(currentUser.id).then((res) => setContactsList(res));
  }, [currentUser.id]);

  return (
    <menu
      className='container-fluid d-flex flex-column px-2 m-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Filter />
      {contactsList?.map((contact) => {
        return (
          <Chat key={contact?.id} contact={contact} currentUser={currentUser} />
        );
      })}
    </menu>
  );
};

export default ChatsHistory;
