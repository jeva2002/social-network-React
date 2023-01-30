import { useSelector } from 'react-redux';
import { getIsActive } from '../../../../controller/features';
import { getCurrentChat } from '../../../../controller/features/chats';
import ChatMenu from './CurrentChat/ChatMenu';
import CurrentContact from './CurrentChat/CurrentContact';
import MessagesList from './CurrentChat/MessagesList';

const CurrentChat: React.FunctionComponent = () => {
  const currentChatSelected = useSelector(getCurrentChat);
  const isActive = useSelector(getIsActive);

  return (
    <section
      className={`${
        isActive ? 'hidden' : ''
      } current-chat col-md-8 col-12 d-flex flex-column`}
    >
      <CurrentContact currentChat={currentChatSelected} />
      <MessagesList currentChat={currentChatSelected} />
      <ChatMenu chatId={currentChatSelected?.chat?.id} contactId={currentChatSelected?.id} />
    </section>
  );
};

export default CurrentChat;
