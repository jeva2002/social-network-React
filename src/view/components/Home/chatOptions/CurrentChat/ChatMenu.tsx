import { useState } from 'react';
import smile from '../../../../../assets/icons/smile.svg';
import clip from '../../../../../assets/icons/paperclip.svg';
import mic from '../../../../../assets/icons/mic.svg';
import send from '../../../../../assets/icons/send.svg';
import FormControl from 'react-bootstrap/FormControl';
import { sendMessage } from '../../../../../controller/handler';
import { useSelector } from 'react-redux';

interface Props {
  chatId: string;
}

const ChatMenu: React.FunctionComponent<Props> = ({ chatId }) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [input, setInput] = useState('');

  return (
    <menu className='gray menu-chat container-fluid d-flex justify-content-evenly align-items-center py-3 m-0'>
      <img className='icon click col-1' src={smile} alt='Emojis' />
      <img className='icon click col-1' src={clip} alt='Files' />
      <form
        className='col-9 position-relative'
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(chatId, currentUser.id, input);
        }}
      >
        <FormControl
          className='mx-2 py-2 ps-4'
          style={{
            borderRadius: 30,
          }}
          placeholder='Escribe un mensaje'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <img
          className='send icon click'
          src={send}
          alt='Enviar'
          onClick={() => sendMessage(chatId, currentUser.id, input)}
        />
      </form>
      <img className='icon click col-1' src={mic} alt='Audio' />
    </menu>
  );
};

export default ChatMenu;
