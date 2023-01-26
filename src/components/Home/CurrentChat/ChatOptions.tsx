// import { useState } from 'react';
// import smile from '../../../assets/smile.svg';
// import clip from '../../../assets/paperclip.svg';
// import mic from '../../../assets/mic.svg';
// import FormControl from 'react-bootstrap/FormControl';

interface Props {
  // handleSubmit: (_text: string) => Promise<any> | undefined;
}

const ChatOptions: React.FunctionComponent<Props> = ({  }) => {
  // const [newMessage, setNewMessage] = useState('');
  return (
    <menu
      className='menu-chat container-fluid d-flex justify-content-evenly align-items-center py-4 m-0'
      style={{
        backgroundColor: '#f6f6f6',
      }}
    >
      {/* <img
        className='click col-1'
        src={smile}
        alt='Emojis'
        style={{ width: 35, height: 35 }}
      />
      <img
        className='click col-1'
        src={clip}
        alt='Files'
        style={{ width: 35, height: 35 }}
      />
      <form
        className='col-9'
        onSubmit={(e) => {
          e.preventDefault();
          if(newMessage !== ''){
            handleSubmit(newMessage);
            setNewMessage('');
          }
        }}
      >
        <FormControl
          className='mx-2 py-3 ps-4'
          style={{
            borderRadius: 30,
          }}
          placeholder='Escribe un mensaje'
          onChange={(e) => setNewMessage(e.currentTarget.value)}
          value={newMessage}
        />
      </form>
      <img
        className='click col-1'
        src={mic}
        alt='Audio'
        style={{ width: 35, height: 35 }}
      /> */}
    </menu>
  );
};

export default ChatOptions;
