import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Message as IMessage } from '../../../../../../types';
import arrow from '../../../../../../assets/icons/arrow-down.svg';
import check from '../../../../../../assets/icons/check.svg';
import Options from './Options';
import { getCurrentUser } from '../../../../../../controller/features/currentUser';

interface Props {
  message: IMessage;
  handleDelete: (message: IMessage) => void;
}

const Message: React.FunctionComponent<Props> = ({ message, handleDelete }) => {
  const currentUser = useSelector(getCurrentUser);

  const [showOptions, setShowOptions] = useState(false);

  const deleteMessage = () => {
    handleDelete(message);
    setShowOptions(false);
  };

  return (
    <article
      className={`message col-md-6 col-9 p-2 px-4 my-3 mx-4 d-flex flex-column ${
        currentUser?.id !== message.sendBy
          ? 'align-self-start contact-message'
          : 'align-self-end user-message'
      }`}
    >
      <div className='d-flex justify-content-between position-relative'>
        <p className='col-11' style={{ fontSize: 18 }}>
          {message.message}
        </p>
        <img
          className='click icon'
          src={arrow}
          alt='Mostrar opciones'
          onClick={() => setShowOptions((value) => !value)}
        />
      </div>
      {showOptions ? <Options deleteMessage={deleteMessage} /> : null}
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

export default Message;
