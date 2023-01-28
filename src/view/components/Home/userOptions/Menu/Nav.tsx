import close from '../../../../../assets/icons/x.svg';
import addContact from '../../../../../assets/icons/user-plus.svg';
import noPhoto from '../../../../../assets/icons/no-photo.svg';
import contactsList from '../../../../../assets/icons/contacts-list.svg';
import chats from '../../../../../assets/icons/chats.svg';
import { useSelector, useDispatch } from 'react-redux';
import { clearCurrentUser, setMenuView, setUserOptions } from '../../../../../controller/slices';
import { useState } from 'react';

interface Props {}

const Nav: React.FunctionComponent<Props> = (props) => {
  const { profileImg } = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const dispatch = useDispatch();

  const [profilePic, setProfilePic] = useState(profileImg);

  return (
    <section
      className='gray px-3 py-2 d-flex justify-content-between gap-1'
    >
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
        onClick={() => dispatch(setMenuView('chatHistory'))}
      />
      <img
        src={contactsList}
        alt='Lista de contactos'
        style={{ width: 35, cursor: 'pointer' }}
        onClick={() => dispatch(setMenuView('contactsList'))}
      />
      <img
        src={addContact}
        alt='Agregar contacto'
        style={{ width: 35, cursor: 'pointer' }}
        onClick={() => dispatch(setMenuView('addContact'))}
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
