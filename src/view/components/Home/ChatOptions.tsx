import { useSelector } from 'react-redux';
import { getChatOptions } from '../../../controller/features';
import CurrentChat from './chatOptions/CurrentChat';

const setChatOptionsView = (chatOptions: string) => {
  switch (chatOptions) {
    default:
      return <CurrentChat />;
  }
};

const ChatOptions: React.FunctionComponent = () => {
  const chatOptions = useSelector(getChatOptions);

  return setChatOptionsView(chatOptions);
};

export default ChatOptions;
