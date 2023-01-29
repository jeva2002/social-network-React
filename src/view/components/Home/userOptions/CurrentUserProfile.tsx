import { useDispatch } from 'react-redux';
import { setUserOptions } from '../../../../controller/features';
import arrow from '../../../../assets/icons/arrow-left.svg';
import Profile from './UserProfile/Profile';
import { useState } from 'react';
import EditProfile from './UserProfile/EditProfile';

const CurrentUserProfile: React.FunctionComponent = () => {
  const [edit, setEdit] = useState<boolean>(false)

  const dispatch = useDispatch();

  return (
    <div
      className={`container-fluid col-md-4 col-12 p-0 m-0`}
      style={{ backgroundColor: '#f6f6f6', height: '100vh' }}
    >
      <section
        className='d-flex align-items-center justify-content-start gap-3 m-0 p-3'
        style={{ backgroundColor: '#6aab78', color: '#fbfbfb' }}
      >
        <img
          src={arrow}
          alt='Regresar'
          onClick={() => dispatch(setUserOptions('menu'))}
          style={{
            cursor: 'pointer',
          }}
        />
        <h2 className='pt-2' style={{ fontSize: 22 }}>Perfil</h2>
      </section>
      {!edit ? <Profile setEdit={setEdit}/> : <EditProfile edit={edit} setEdit={setEdit}/>}
    </div>
  );
};

export default CurrentUserProfile;
