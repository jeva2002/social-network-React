import { useState, useEffect } from 'react';
import { getUser } from '../../functions/services';
import { Chat, User } from '../../functions/services/types';

interface MiniatureChat {
  chat: Chat;
  userId: number | undefined;
}

const MiniatureChat: React.FunctionComponent<MiniatureChat> = ({
  chat,
  userId,
}) => {
  const [contact, setContact] = useState<User>();

  useEffect(() => {
    getUser('id', userId === chat.idUserOne ? chat.idUserTwo : chat.idUserOne)
      .then((res) => setContact(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <article className='d-flex border-bottom py-3 px-2 gap-3'>
      <img
        src={contact?.profileImg}
        alt='Profile pic'
      />
      <div>
        <h3 style={{fontSize: 20}}>{contact?.name}</h3>
        <small>{chat.chat.at(-1)?.message}</small>
      </div>
    </article>
  );
};

export default MiniatureChat;
