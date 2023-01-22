import { useState } from 'react';
import { Message } from '../../../functions/services/types';
import arrow from '../../../assets/arrow-down.svg';
import check from '../../../assets/check.svg';
import FormControl from 'react-bootstrap/FormControl';

interface Props {
  message: Message;
  contactId: number | undefined;
  handleDeleteMessage: (message: Message) => void;
  handleEditMessage: (text: string, message: Message) => void;
}

const MessageComponent: React.FunctionComponent<Props> = ({
  message,
  contactId,
  handleDeleteMessage,
  handleEditMessage,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [edit, setEdit] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState(message.message);

  return (
    <article
      className={`col-md-6 col-9 p-2 px-4 my-3 mx-4 d-flex flex-column ${
        contactId === message.sendBy
          ? 'align-self-start contact-message'
          : 'align-self-end user-message'
      }`}
    >
      <div className='d-flex justify-content-between position-relative'>
        {!edit ? (
          <p className='col-11' style={{ fontSize: 18 }}>
            {message.message}
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditMessage(updatedMessage, message);
              setUpdatedMessage('');
              setEdit(!edit);
            }}
          >
            <FormControl
              value={updatedMessage}
              onChange={(e) => setUpdatedMessage(e.currentTarget.value)}
            />
          </form>
        )}
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
            <li
              className='menu-select m-0'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setEdit(!edit);
                setShowOptions(false);
              }}
            >
              Editar mensaje
            </li>
            <li
              className='menu-select m-0'
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleDeleteMessage(message);
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
