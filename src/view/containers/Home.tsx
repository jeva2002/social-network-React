import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChats, getContacts } from '../../controller/handler';
import { Navigate } from 'react-router-dom';
import Menu from '../components/Home/Menu';
import { Contact } from '../../model/types';
import {
  modifyChat,
  setActiveChats,
  setContacts,
  setCurrentUser,
} from '../../controller/slices';
import { listenDoc } from '../../model/db/crud';
import { doc, DocumentData } from 'firebase/firestore';
import { formatCurrentUser } from '../../model/validations';
import { collections } from '../../model/db/config';

const Home: React.FunctionComponent = (props) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const activeChats = useSelector(
    (state: any) => state.activeChats.activeChats
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      getContacts(
        currentUser.contacts.map((contact: Contact) => Number(contact.cel))
      ).then((res) => dispatch(setContacts(res)));
      getActiveChats(currentUser?.id).then((res) =>
        dispatch(setActiveChats(res))
      );
    }
  }, [currentUser]);

  useEffect(() => {
    const listenCurrentUser = (doc: DocumentData | undefined, id: string) => {
      dispatch(setCurrentUser(formatCurrentUser(doc, id)));
    };
    listenDoc(currentUser?.id, collections.users, listenCurrentUser);

    const listenActiveChats = (doc: DocumentData | undefined) => {
      dispatch(modifyChat(doc))
    }
    const getActiveChats = (
      docs: (DocumentData | undefined)[],
    ) => {
      docs.forEach((doc) => {
        if (doc) {
          listenDoc(doc.chat.id, collections.chats, listenActiveChats)
        }
      });
    };
    getActiveChats(activeChats);
  }, []);

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
