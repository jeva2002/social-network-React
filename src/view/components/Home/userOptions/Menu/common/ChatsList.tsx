import { useSelector } from 'react-redux';
import { Contact, ContactData } from '../../../../../../model/types';
import Chat from './Chat';

interface Props {
  filter: string;
  list: ContactData[];
  lastMessage: boolean
}
const ChatsList: React.FunctionComponent<Props> = ({ filter, list, lastMessage }) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  return (
    <menu
      className='d-flex flex-column px-2 m-0 p-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {list
        .filter((contact) => {
          const nickname = currentUser?.contacts?.find(
            (e: Contact) => e.cel === contact?.cel
          );
          return `${
            nickname.contact !== '' ? nickname.contact : nickname.cel
          }`.toLowerCase().includes(filter);
        })
        .map((contact) => {
          return (
            <Chat
              key={contact?.id}
              contact={contact}
              currentUser={currentUser}
              lastMessage={lastMessage}
            />
          );
        })}
    </menu>
  );
};

export default ChatsList;
