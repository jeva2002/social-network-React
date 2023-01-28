import { Message as IMessage } from '../../../../../model/types';
import arrow from '../../../../../assets/icons/arrow-down.svg';
import check from '../../../../../assets/icons/check.svg';
import { useSelector } from 'react-redux';

interface Props {
  message: IMessage;
}

const Message: React.FunctionComponent<Props> = ({ message }) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  return (
    <article
    className={`col-md-6 col-9 p-2 px-4 my-3 mx-4 d-flex flex-column ${
    currentUser.id !== message.sendBy
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

export default Message;
