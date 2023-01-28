import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Contact, ContactData } from '../../../../../../model/types';
import Chat from './Chat';

interface Props {
  filter: string;
  list: ContactData[];
  lastMessage: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const ChatsList: React.FunctionComponent<Props> = ({
  filter,
  list,
  lastMessage,
  setActive,
}) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [user, setUser] = useState(currentUser);

  return (
    <menu
      className='chats-list d-flex flex-column px-2 m-0 p-0'
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {list
        .filter((contact) => {
          const nickname = user?.contacts?.find(
            (e: Contact) => e.cel === contact?.cel
          );
          return `${nickname.contact !== '' ? nickname.contact : nickname.cel}`
            .toLowerCase()
            .includes(filter);
        })
        .map((contact) => {
          return (
            <Chat
              key={contact?.id}
              contact={contact}
              currentUser={user}
              lastMessage={lastMessage}
              setActive={setActive}
            />
          );
        })}
    </menu>
  );
};

export default ChatsList;
