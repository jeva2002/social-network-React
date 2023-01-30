import { useState } from 'react';
import smile from '../../../../../assets/icons/smile.svg';
import clip from '../../../../../assets/icons/paperclip.svg';
import mic from '../../../../../assets/icons/mic.svg';
import send from '../../../../../assets/icons/send.svg';
import FormControl from 'react-bootstrap/FormControl';
import { createNewChat, sendMessage } from '../../../../../controller/handlers';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../../../controller/features/currentUser';

interface Props {
  chatId: string | undefined;
  contactId: string | undefined;
}

const ChatMenu: React.FunctionComponent<Props> = ({ chatId, contactId }) => {
  const currentUser = useSelector(getCurrentUser);

  const [input, setInput] = useState('');

  return (
    <menu className='gray menu-chat container-fluid d-flex justify-content-evenly align-items-center py-3 m-0'>
      <img className='icon click col-1' src={smile} alt='Emojis' />
      <img className='icon click col-1' src={clip} alt='Files' />
      <form
        className='col-9 position-relative'
        onSubmit={(e) => {
          e.preventDefault();
          if (chatId) sendMessage(chatId, currentUser?.id, input);
          else {
            createNewChat(input, currentUser?.id ?? '', contactId ?? '');
          }
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
          onClick={() => {
            if (chatId) {
              sendMessage(chatId, currentUser?.id, input);
            }
          }}
        />
      </form>
      <img className='icon click col-1' src={mic} alt='Audio' />
    </menu>
  );
};

export default ChatMenu;
