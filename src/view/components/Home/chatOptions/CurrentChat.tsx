import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsActive } from '../../../../controller/features';
import { getActiveChats, getCurrentChat } from '../../../../controller/features/chats';
import { ContactData } from '../../../../types';
import ChatMenu from './CurrentChat/ChatMenu';
import CurrentContact from './CurrentChat/CurrentContact';
import MessagesList from './CurrentChat/MessagesList';

const CurrentChat: React.FunctionComponent = () => {
  const activeChats = useSelector(getActiveChats);
  const currentChatSelected = useSelector(getCurrentChat);
  const isActive = useSelector(getIsActive);

  const [currentChat, setCurrentChat] = useState<ContactData>();

  useEffect(() => {
    if (activeChats[0]) setCurrentChat(activeChats[0]);
  }, [activeChats]);

  useEffect(() => {
    setCurrentChat(currentChatSelected);
  }, [currentChatSelected]);

  return (
    <section
      className={`${
        isActive ? 'hidden' : ''
      } current-chat col-md-8 col-12 d-flex flex-column`}
    >
      <CurrentContact currentChat={currentChat} />
      <MessagesList currentChat={currentChat} />
      <ChatMenu chatId={currentChat?.chat?.id} />
    </section>
  );
};

export default CurrentChat;
