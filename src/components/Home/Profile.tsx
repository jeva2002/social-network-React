// import arrow from '../../assets/arrow-left.svg';
// import { User } from '../../functions/services/types';
// import Options from './profile/Options';

interface Props {
  // user: User | undefined;
  // setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  // setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile: React.FunctionComponent<Props> = ({
  // user,
  // setUser,
  // setProfile,
}) => {

  return (
    <div
      className={`container-fluid col-md-4 col-12 p-0 m-0`}
      style={{ backgroundColor: '#f6f6f6' }}
    >
      {/* <section className='d-flex align-items-start justify-content-start gap-3 m-0 p-3'>
        <img
          src={arrow}
          alt='Regresar'
          onClick={() => setProfile(false)}
          style={{
            cursor: 'pointer',
          }}
        />
        <h2 style={{ fontSize: 22 }}>Perfil</h2>
      </section>
      <Options user={user} setUser={setUser} /> */}
    </div>
  );
};

export default Profile;
