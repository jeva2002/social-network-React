import { useState } from 'react';
import { Message } from '../../../functions/services/types';
import arrow from '../../../assets/arrow-down.svg';
import check from '../../../assets/check.svg';

interface Props {
  message: Message;
  contactId: number | undefined;
  handleDeleteMessage: (message: Message) => void;
}

const MessageComponent: React.FunctionComponent<Props> = ({
  message,
  contactId,
  handleDeleteMessage,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <article
      className={`col-md-6 col-9 p-2 px-4 my-3 mx-4 d-flex flex-column ${
        contactId === message.sendBy
          ? 'align-self-start contact-message'
          : 'align-self-end user-message'
      }`}
    >
      <div className='d-flex justify-content-between position-relative'>
        <p className='col-11' style={{ fontSize: 18 }}>
          {message.message}
        </p>
        <img
          src={arrow}
          alt='Mostrar opciones'
          style={{
            cursor: 'pointer',
          }}
          onClick={() => setShowOptions(!showOptions)}
        />
        {showOptions ? (
          <menu
            className='position-absolute d-flex flex-column gap-3 p-3'
            style={{
              backgroundColor: '#ccc',
              left: 150,
              top: 20,
              listStyle: 'none',
              zIndex: 10,
              borderRadius: 10,
            }}
          >
            <li className='menu-select m-0' style={{ cursor: 'pointer' }}>
              Editar mensaje
            </li>
            <li
              className='menu-select m-0'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleDeleteMessage(message)
                setShowOptions(false);
              }}
            >
              Eliminar mensaje
            </li>
          </menu>
        ) : null}
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
