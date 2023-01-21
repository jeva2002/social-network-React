import { createContext, useState, useEffect } from 'react';
import { useCurrentUser } from '../App';
import Swal from 'sweetalert2';
import Menu from '../components/Home/Menu';
import { Chat } from '../functions/services/types';
import CurrentChat from '../components/Home/CurrentChat';

const Home: React.FunctionComponent = (props) => {
  const [currentChat, setCurrentChat] = useState<Chat | undefined>();
  const [chatActive, setChatActive] = useState(false);

  const { user } = useCurrentUser();

  useEffect(() => {
    Swal.fire(`Bienvenido ${user?.name}`);
  }, []);

  return (
    <div className='d-flex flex-md-row flex-column p-0 m-0'>
      <Menu
        user={user}
        setCurrentChat={setCurrentChat}
        setChatActive={setChatActive}
        chatActive={chatActive}
      />
      <CurrentChat
        contactId={
          user?.id === currentChat?.idUserOne
            ? currentChat?.idUserTwo
            : currentChat?.idUserOne
        }
        chat={currentChat}
        setChatActive={setChatActive}
        chatActive={chatActive}
      />
    </div>
  );
};

export default Home;
