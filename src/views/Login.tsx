import { useCurrentUser } from '../App';
import LoginForm from '../components/Login/LoginForm';

interface ILoginProps {

}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const { setUser } = useCurrentUser()

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <LoginForm setUser={setUser}/>
    </div>
  );
};

export default Login;
