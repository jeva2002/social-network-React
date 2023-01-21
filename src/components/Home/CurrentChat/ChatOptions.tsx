import smile from '../../../assets/smile.svg';
import clip from '../../../assets/paperclip.svg';
import mic from '../../../assets/mic.svg';
import FormControl from 'react-bootstrap/FormControl';

interface Props {}

const ChatOptions: React.FunctionComponent<Props> = (props) => {
  return (
    <menu
      className='menu-chat container-fluid d-flex gap-3 py-3 m-0'
      style={{
        backgroundColor: '#f6f6f6',
      }}
    >
      <img className='click' src={smile} alt='Emojis' />
      <img className='click' src={clip} alt='Files' />
      <FormControl
        className='mx-2 py-3 ps-4'
        style={{
          borderRadius: 30,
        }}
        placeholder='Escribe un mensaje'
      />
      <img className='click' src={mic} alt='Audio' />
    </menu>
  );
};

export default ChatOptions;
