import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveChats, getContacts } from '../../controller/handler';
import { Navigate } from 'react-router-dom';
import { Contact } from '../../model/types';
import {
  modifyChat,
  setActiveChats,
  setContacts,
  setCurrentChat,
  setCurrentUser,
} from '../../controller/slices';
import { listenDoc } from '../../model/db/crud';
import { DocumentData, Unsubscribe } from 'firebase/firestore';
import { formatCurrentUser } from '../../model/validations';
import { collections } from '../../model/db/config';
import UserOptions from '../components/Home/UserOptions';
import ChatOptions from '../components/Home/ChatOptions';

const Home: React.FunctionComponent = () => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const activeChats = useSelector(
    (state: any) => state.activeChats.activeChats
  );
  const currentChat = useSelector(
    (state: any) => state.currentChat.currentChat
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;

    if (currentUser) {
      getContacts(
        currentUser.contacts.map((contact: Contact) => Number(contact.cel))
      ).then((res) => {
        dispatch(setContacts(res));
        const listenCurrentUser = (
          doc: DocumentData | undefined,
          id: string
        ) => {
          dispatch(setCurrentUser(formatCurrentUser(doc, id)));
        };
        unsubscribe = listenDoc(
          currentUser?.id,
          collections.users,
          listenCurrentUser
        );
      });

      getActiveChats(currentUser?.id).then((res: any) =>
        dispatch(setActiveChats(res))
      );
    }
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  useEffect(() => {
    const listenersList: Unsubscribe[] = [];

    const listenActiveChats = (doc: DocumentData | undefined) => {
      dispatch(modifyChat(doc));
      if(currentChat){
        if(currentChat.chat.id === doc?.id){
          const chat = {...currentChat};
          chat.chat = doc;
          dispatch(setCurrentChat(chat))
        }
      }
    };
    const iterateActiveChats = (docs: (DocumentData | undefined)[]) => {
      docs.forEach((doc) => {
        if (doc) {
          listenersList.push(
            listenDoc(doc.chat.id, collections.chats, listenActiveChats)
          );
        }
      });
    };
    iterateActiveChats(activeChats);

    return () => {
      listenersList.forEach((listener) => listener());
    };
  }, [activeChats, dispatch]);

  const [active, setActive] = useState(true);

  if (!currentUser) {
    return <Navigate to='/' />;
  } else {
    return (
      <main className='d-flex flex-md-row flex-column p-0 m-0'>
        <UserOptions active={active} setActive={setActive}/>
        <ChatOptions active={active} setActive={setActive}/>
      </main>
    );
  }
};

export default Home;
