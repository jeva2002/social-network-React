import { useSelector } from 'react-redux';
import CurrentChat from './chatOptions/CurrentChat';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const setChatOptionsView = (chatOptions: string, props: Props) => {
  switch (chatOptions) {
    default:
      return <CurrentChat active={props.active} setActive={props.setActive} />;
  }
};


const ChatOptions: React.FunctionComponent<Props> = (props) => {
  const chatOptions: string = useSelector(
    (state: any) => state.globalView.chatOptions
  );

  return setChatOptionsView(chatOptions, props);
};

export default ChatOptions;
