import { DocumentData, Unsubscribe } from 'firebase/firestore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collections } from '../../model/db/config';
import { listenDoc } from '../../model/db/services';
import { formatCurrentUser } from '../../model/validations';
import { ContactData, CurrentUserData } from '../../types';
import { modifyChat, setCurrentUser, getActiveChats } from '../features';

export const useListenCurrentUser = (
  currentUser: CurrentUserData | undefined
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listenCurrentUser = (doc: DocumentData | undefined, id: string) => {
      dispatch(setCurrentUser(formatCurrentUser(doc, id)));
    };

    if (currentUser) {
      const unsubscribe = listenDoc(
        currentUser.id,
        collections.users,
        listenCurrentUser
      );

      return () => unsubscribe();
    }
  }, []);
};

export const useListenActiveChats = () => {
  const activeChats = useSelector(getActiveChats);
  const dispatch = useDispatch();

  useEffect(() => {
    const listenersList: Unsubscribe[] = [];

    const listenActiveChats = (doc: DocumentData | undefined) => {
      dispatch(modifyChat(doc));
    };

    if (activeChats) {
      activeChats.forEach((doc: ContactData | undefined) => {
        if (doc) {
          listenersList.push(
            listenDoc(doc.chat.id, collections.chats, listenActiveChats)
          );
        }
      });
    }

    return () => {
      listenersList.forEach((listener) => listener());
    };
  }, []);
};
