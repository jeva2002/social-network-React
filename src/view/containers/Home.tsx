import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../controller/handler';
import { Navigate } from 'react-router-dom';
import Menu from '../components/Home/Menu';
import { Contact, ContactData, CurrentUserData } from '../../model/types';
import { setContacts, setCurrentUser } from '../../controller/slices';
import { listenDoc } from '../../model/db/crud';
import { DocumentData } from 'firebase/firestore';

const Home: React.FunctionComponent = (props) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      getContacts(
        currentUser.contacts.map((contact: Contact) => Number(contact.cel))
      ).then((res) => dispatch(setContacts(res)));
    }
  }, [currentUser]);

  useEffect(() => {
    const listenCurrentUser = (doc: DocumentData | undefined, id: string) => {
      if (doc) {
        const user = { ...doc };
        const formatedUser: CurrentUserData = {
          cel: user.cel,
          description: user.description,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          id: id,
          profileImg: user.profileImg,
          contacts: user.contacts,
        };
        dispatch(setCurrentUser(formatedUser));
      }
    };
    listenDoc(currentUser.id, listenCurrentUser);
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
