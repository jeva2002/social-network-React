import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactData } from '../../../../model/types';
import ChatMenu from './CurrentChat/ChatMenu';
import CurrentContact from './CurrentChat/CurrentContact';
import MessagesList from './CurrentChat/MessagesList';

const CurrentChat: React.FunctionComponent = () => {
  const activeChats = useSelector(
    (state: any) => state.activeChats.activeChats
  );
  const currentChatSelected = useSelector(
    (state: any) => state.currentChat.currentChat
  );

  const [currentChat, setCurrentChat] = useState<ContactData>(activeChats[0]);

  useEffect(() => {
    if(activeChats[0]) setCurrentChat(activeChats[0]);
  }, [activeChats]);

  useEffect(() => {
    setCurrentChat(currentChatSelected);
  }, [currentChatSelected]);

  return (
    <section className='current-chat col-md-8 col-12 d-flex flex-column'>
      <CurrentContact currentChat={currentChat} />
      <MessagesList currentChat={currentChat} />
      <ChatMenu chatId={currentChat?.chat?.id} />
    </section>
  );
};

export default CurrentChat;
