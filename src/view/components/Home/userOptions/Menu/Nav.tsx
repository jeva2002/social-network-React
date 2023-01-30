import close from '../../../../../assets/icons/x.svg';
import addContact from '../../../../../assets/icons/user-plus.svg';
import noPhoto from '../../../../../assets/icons/no-photo.svg';
import contactsList from '../../../../../assets/icons/contacts-list.svg';
import chats from '../../../../../assets/icons/chats.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCurrentUser,
  setUserOptions,
} from '../../../../../controller/features';
import { useState } from 'react';
import { getCurrentUser } from '../../../../../controller/features/currentUser';

interface Props {
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FunctionComponent<Props> = ({ setView }) => {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const [profilePic, setProfilePic] = useState(
    currentUser?.profileImg ?? noPhoto
  );

  return (
    <section className='gray px-3 py-2 d-flex justify-content-between gap-1'>
      <img
        className='profile'
        src={profilePic}
        alt='Profile pic'
        style={{
          cursor: 'pointer',
        }}
        onError={() => setProfilePic(noPhoto)}
        onClick={() => dispatch(setUserOptions('profile'))}
      />
      <img
        src={chats}
        alt='Chats'
        style={{ width: 35, cursor: 'pointer' }}
        onClick={() => setView('chatHistory')}
      />
      <img
        src={contactsList}
        alt='Lista de contactos'
        style={{ width: 35, cursor: 'pointer' }}
        onClick={() => setView('contactsList')}
      />
      <img
        src={addContact}
        alt='Agregar contacto'
        style={{ width: 35, cursor: 'pointer' }}
        onClick={() => setView('addContact')}
      />
      <img
        src={close}
        alt='Cerrar sesión'
        style={{ width: 35, cursor: 'pointer' }}
        onClick={() => {
          dispatch(clearCurrentUser());
        }}
      />
    </section>
  );
};

export default Nav;
