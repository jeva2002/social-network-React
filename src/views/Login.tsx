import { Link } from 'react-router-dom';
import { useCurrentUser } from '../App';
import LoginForm from '../components/Login/LoginForm';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const { setUser } = useCurrentUser();

  return (
    <div
      className='d-flex flex-column gap-4 align-items-center justify-content-center'
      style={{
        minHeight: '100vh',
        backgroundColor: '#d1e4bc',
      }}
    >
      <h1 className=''>LOGIN</h1>
      <LoginForm setUser={setUser} />
      <Link to='/register'>Regístrate gratis</Link>
    </div>
  );
};

export default Login;
