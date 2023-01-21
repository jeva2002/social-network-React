import * as React from 'react';
import { Message } from '../../../functions/services/types';

interface Props {
  message: Message;
  contactId: number | undefined;
}

const MessageComponent: React.FunctionComponent<Props> = ({ message, contactId }) => {
  return (
    <article
      className={`col-md-6 col-9 p-2 px-4 my-3 mx-4 d-flex flex-column ${
        contactId === message.sendBy
          ? 'align-self-start contact-message'
          : 'align-self-end user-message'
      }`}
    >
      <p style={{ fontSize: 18 }}>{message.message}</p>
      <small className='align-self-end'>{`${message.hour}`}</small>
    </article>
  );
};

export default MessageComponent;
