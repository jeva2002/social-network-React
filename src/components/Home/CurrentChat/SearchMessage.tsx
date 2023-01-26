// import { useState } from 'react';
// import FormControl from 'react-bootstrap/FormControl';
// import close from '../../../assets/x.svg';
// import search from '../../../assets/search.svg';
// import { Chat, User } from '../../../functions/services/types';

interface Props {
//   chat: Chat | undefined;
//   user: User | undefined;
//   setMessageDetail: React.Dispatch<React.SetStateAction<boolean>>;
//   style?: string;
}

const SearchMessage: React.FunctionComponent<Props> = ({
  // chat,
  // user,
  // setMessageDetail,
  // style,
}) => {
  // const [filter, setFilter] = useState('');

  // const filteredMessages = () => {
  //   return chat?.chat.filter((e) =>
  //     e.message.toLowerCase().match(filter.toLowerCase())
  //   );
  // };

  return (
    <section
      // className={`${
      //   !style ? '' : style
      // } d-flex flex-column gap-3 p-3`}
      // style={{
      //   backgroundColor: '#f6f6f6',
      //   height: '100vh',
      //   right: '0',
      // }}
    >
      {/* <div className='d-flex gap-4 justify-content-center align-items-center'>
        <img
          src={close}
          alt='Cerrar'
          style={{ cursor: 'pointer' }}
          onClick={() => setMessageDetail(false)}
        />
        <h3>Mensajes con {user?.name}</h3>
      </div>
      <form
        className='d-flex align-items-center position-relative px-4'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img
          className='position-absolute'
          src={search}
          alt='Buscar'
          style={{ width: 22, left: '3vw' }}
        />
        <FormControl
          className='ps-5'
          value={filter}
          onChange={(e) => {
            setFilter(e.currentTarget.value);
          }}
          style={{ borderRadius: 30 }}
        />
        <img
          className='position-absolute'
          src={close}
          alt='Cerrar'
          style={{ right: '3vw', cursor: 'pointer' }}
          onClick={() => setFilter('')}
        />
      </form>
      <ul className='d-flex flex-column pe-4'>
        {filteredMessages()?.map((e, index) => {
          return (
            <li
              key={index}
              className='py-3 border-bottom border-white d-flex flex-column justify-content-center align-items-start'
              style={{ listStyle: 'none' }}
            >
              <small>{e.date}</small>
              <p>{e.message}</p>
            </li>
          );
        })}
      </ul> */}
    </section>
  );
};

export default SearchMessage;
