import { useState } from 'react';
import { Chat, Message } from '../../../functions/services/types';
import arrow from '../../../assets/arrow-down.svg';
import check from '../../../assets/check.svg';

interface Props {
  message: Message;
  contactId: number | undefined;
}

const MessageComponent: React.FunctionComponent<Props> = ({
  message,
  contactId,
}) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <article
      className={`col-md-6 col-9 p-2 px-4 my-3 mx-4 d-flex flex-column ${
        contactId === message.sendBy
          ? 'align-self-start contact-message'
          : 'align-self-end user-message'
      }`}
    >
      <div className='d-flex justify-content-between'>
        <p className='col-11' style={{ fontSize: 18 }}>
          {message.message}
        </p>
        <img
          src={arrow}
          alt='Mostrar opciones'
          style={{
            cursor: 'pointer',
          }}
          onClick={() => setShowEdit(true)}
        />
      </div>
      <div className='align-self-end d-flex align-items-center'>
        <small>{`${message.hour}`}</small>
        <img
          src={check}
          alt='visto'
          style={
            message.viewed
              ? {
                  filter:
                    'invert(52%) sepia(76%) saturate(3175%) hue-rotate(167deg) brightness(98%) contrast(102%)',
                }
              : {}
          }
        />
      </div>
    </article>
  );
};

export default MessageComponent;
