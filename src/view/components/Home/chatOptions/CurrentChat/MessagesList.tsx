import { ContactData } from '../../../../../model/types';
import Message from './Message';

interface Props {
  currentChat: ContactData | undefined;
}
const MessagesList: React.FunctionComponent<Props> = ({ currentChat }) => {
  return (
    <section className='messages-list d-flex flex-column'>
      {currentChat?.chat.messages
        ? currentChat?.chat.messages.map((message, index) => (
            <Message key={index} message={message} />
          ))
        : null}
    </section>
  );
};

export default MessagesList;
