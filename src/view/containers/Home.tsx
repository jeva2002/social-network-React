import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { CurrentUserData } from '../../types';
import { getCurrentUser } from '../../controller/features/currentUser';
import {
  useSetActiveChats,
  useSetContacts,
  useListenCurrentUser,
  useListenActiveChats,
} from '../../controller/hooks';
import UserOptions from '../components/Home/UserOptions';
import ChatOptions from '../components/Home/ChatOptions';

const Home: React.FunctionComponent = () => {
  const currentUser: CurrentUserData | undefined = useSelector(getCurrentUser);

  useSetContacts(currentUser);
  useListenCurrentUser(currentUser);

  useSetActiveChats(currentUser);
  useListenActiveChats();

  if (!currentUser) {
    return <Navigate to='/' />;
  } else {
    return (
      <main className='d-flex flex-md-row flex-column p-0 m-0'>
        <UserOptions />
        <ChatOptions  />
      </main>
    );
  }
};

export default Home;
