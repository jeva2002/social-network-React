import * as React from 'react';
import { Chat } from '../../functions/services/types';
import MiniatureChat from './MiniatureChat';

interface Props {
  chatsList: Chat[] | undefined;
  userId: number | undefined;
}

const ChatsHistory: React.FunctionComponent<Props> = ({
  chatsList,
  userId,
}) => {
  console.log(chatsList);
  return (
    <section className='container-fluid d-flex flex-column'>
      {chatsList?.map((chat) => {
        return (
          <MiniatureChat
            key={`${chat.idUserOne}-${chat.idUserTwo}`}
            chat={chat}
            userId={userId}
          />
        );
      })}
    </section>
  );
};

export default ChatsHistory;
