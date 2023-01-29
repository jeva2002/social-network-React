import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrentUserData } from '../../../../../types';
import noPhoto from '../../../../../assets/icons/no-photo.svg';
import camera from '../../../../../assets/icons/camera.svg';
import edit from '../../../../../assets/icons/edit-2.svg';

interface Props {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FunctionComponent<Props> = ({ setEdit }) => {
  const currentUser: CurrentUserData = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const [profilePic, setProfilePic] = useState(
    currentUser.profileImg ?? noPhoto
  );
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <section className='d-flex flex-column align-items-start gap-3 px-4'>
      <figure
        className='align-self-center my-3'
        style={{
          borderRadius: '50%',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        onError={() => setProfilePic(noPhoto)}
      >
        {!mouseOver ? (
          <img
            className='pic-options'
            src={profilePic}
            alt='Profile pic'
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
            }}
          />
        ) : (
          <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              backgroundColor: '#bbb',
            }}
            onClick={() => setEdit(true)}
          >
            <img src={camera} alt='Editar' style={{ width: 50 }} />
            <small>Cambiar imagen</small>
          </div>
        )}
      </figure>
      <div className='col-12'>
        <div className='d-flex justify-content-between align-items-center border-bottom border-success pb-2 mb-4'>
          <h4 className='pt-3'>Nombre</h4>
          <img
            src={edit}
            alt='Editar contenido'
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setEdit(true)}
          />
        </div>
        <h2>{currentUser.firstname + ' ' + currentUser.lastname}</h2>
        <h3>{currentUser.cel}</h3>
      </div>
      <div className='col-12 '>
        <h4 className=' col-12 border-bottom border-success pb-2 mb-4'>
          Descripción
        </h4>
        <p style={{ fontSize: 20 }}>{currentUser.description}</p>
      </div>
    </section>
  );
};

export default Profile;
