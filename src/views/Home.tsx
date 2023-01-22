import { useState, useEffect } from 'react';
import { useCurrentUser } from '../App';
import Swal from 'sweetalert2';
import Menu from '../components/Home/Menu';
import { Chat } from '../functions/services/types';
import CurrentChat from '../components/Home/CurrentChat';
import Profile from '../components/Home/Profile';
import { connect } from '../functions/services';

const Home: React.FunctionComponent = (props) => {
  const [currentChat, setCurrentChat] = useState<Chat | undefined>();
  const [chatActive, setChatActive] = useState(false);
  const [profile, setProfile] = useState(false);
  const [modify, setModify] = useState(false)

  const { user, setUser } = useCurrentUser();

  useEffect(() => {
    connect(user?.id);
    Swal.fire(`Bienvenido ${user?.name}`);
  }, []);

  return (
    <div className='d-flex flex-md-row flex-column p-0 m-0'>
      {!profile ? (
        <Menu
          user={user}
          setCurrentChat={setCurrentChat}
          setChatActive={setChatActive}
          chatActive={chatActive}
          setProfile={setProfile}
        />
      ) : (
        <Profile user={user} setUser={setUser} setProfile={setProfile} />
      )}

      <CurrentChat
        contactId={
          user?.id === currentChat?.idUserOne
            ? currentChat?.idUserTwo
            : currentChat?.idUserOne
        }
        chat={currentChat}
        setChatActive={setChatActive}
        chatActive={chatActive}
        setModify={setModify}
      />
    </div>
  );
};

export default Home;
