import { useSelector } from 'react-redux';
import CurrentChat from './chatOptions/CurrentChat';

const setChatOptionsView = (chatOptions: string) => {
  switch (chatOptions) {
    default:
      return <CurrentChat />;
  }
};

const ChatOptions: React.FunctionComponent = () => {
  const chatOptions: string = useSelector(
    (state: any) => state.globalView.chatOptions
  );

  return setChatOptionsView(chatOptions);
};

export default ChatOptions;
