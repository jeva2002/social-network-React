import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Menu from '../components/Home/Menu';

const Home: React.FunctionComponent = (props) => {
  // const [currentChat, setCurrentChat] = useState<Chat | undefined>();
  // const [chatActive, setChatActive] = useState(false);
  // const [profile, setProfile] = useState(false);
  // const [modify, setModify] = useState(false)

  // const { user, setUser } = useCurrentUser();

  // useEffect(() => {
  //   connect(user?.id);
  //   Swal.fire(`Bienvenido ${user?.name}`);
  // }, []);

  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  if (!currentUser) {
    return <Navigate to='/' />;
  }

  return (
    <div className='d-flex flex-md-row flex-column p-0 m-0'>
      <Menu />
      {/* {!profile ? (
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
      /> */}
    </div>
  );
};

export default Home;
