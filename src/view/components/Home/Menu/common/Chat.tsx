import { useEffect, useState } from 'react';
import noPhoto from '../../../../../assets/no-photo.svg';

interface Props {
  contact:
    | { id: any; cel: any; description: any; profileImg: any; chat: any }
    | undefined;
  currentUser: any;
  lastMessage?: boolean;
}

const Chat: React.FunctionComponent<Props> = ({
  contact,
  currentUser,
  lastMessage,
}) => {
  const [profilePic, setProfilePic] = useState(contact?.profileImg || noPhoto);
  const [name, setName] = useState(contact?.cel);

  const nickname = currentUser.contacts.find(
    (e: any) => e.cel === contact?.cel
  );

  useEffect(() => {
    if (nickname.contact !== '') setName(nickname.contact);
  }, [nickname.contact]);

  return (
    <article
      className='d-flex border-bottom py-1 ps-3 gap-3'
      style={{ maxHeight: 100, overflow: 'hidden' }}
      onClick={() => {}}
    >
      <img
        className='profile'
        src={profilePic}
        alt='Profile pic'
        onError={() => setProfilePic(noPhoto)}
      />
      <div className='d-flex flex-column justify-content-center gap-0'>
        <h3 className='p-0 m-0' style={{ fontSize: 18 }}>
          {name}
        </h3>
        {lastMessage ?? (
          <small className='p-0 m-0' style={{ height: 18, overflow: 'hidden' }}>
            {contact?.chat.messages.at(-1).message}
          </small>
        )}
      </div>
    </article>
  );
};

export default Chat;
