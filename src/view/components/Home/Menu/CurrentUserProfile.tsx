import close from '../../../../assets/x.svg';
import addContact from '../../../../assets/user-plus.svg';
import noPhoto from '../../../../assets/no-photo.svg';
import contactsList from '../../../../assets/contacts-list.svg';
import { useSelector, useDispatch } from 'react-redux';
import { clearCurrentUser } from '../../../../controller/slices';
import { useState } from 'react';

interface Props {}

const CurrentUserProfile: React.FunctionComponent<Props> = (props) => {
  const { profileImg } = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const dispatch = useDispatch();

  const [profilePic, setProfilePic] = useState(profileImg);

  return (
    <section
      className='px-5 py-2 d-flex justify-content-between gap-1'
      style={{
        backgroundColor: '#f6f6f6',
      }}
    >
      <img
        className='profile'
        src={profilePic}
        alt='Profile pic'
        onError={() => setProfilePic(noPhoto)}
        onClick={() => {}}
        style={{
          cursor: 'pointer',
        }}
      />
      <img
        src={contactsList}
        alt='Lista'
        style={{ width: 35, cursor: 'pointer' }}
      />
      <img
        src={addContact}
        alt='Agregar contacto'
        style={{ width: 35, cursor: 'pointer' }}
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

export default CurrentUserProfile;
