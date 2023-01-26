import { useSelector } from 'react-redux';
import { ContactData } from '../../../../model/types';
import Chat from './common/Chat';
import Filter from './common/Filter';

const ChatsHistory: React.FunctionComponent = () => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const activeChats = useSelector(
    (state: any) => state.activeChats.activeChats
  );

  return (
    <menu
      className='container-fluid d-flex flex-column px-2 m-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Filter />
      {activeChats.map((contact: ContactData) => {
        return (
          <Chat key={contact.id} contact={contact} currentUser={currentUser} />
        );
      })}
    </menu>
  );
};

export default ChatsHistory;
