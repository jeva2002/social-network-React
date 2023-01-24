import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import { Formik } from 'formik';
import { VALIDATE_LOGIN } from '../functions/controller/domain';
import { Auth } from '../functions/controller/domain/types';
import { handleLogin } from '../functions/controller';

interface ILoginProps {}

const INITIAL_VALUES: Auth = {
  email: '',
  password: '',
};

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div
      className='d-flex flex-column gap-4 align-items-center justify-content-center'
      style={{
        minHeight: '100vh',
        backgroundColor: '#d1e4bc',
      }}
    >
      <h1 className=''>LOGIN</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATE_LOGIN}
        onSubmit={(values) => handleLogin(values)}
      >
        <LoginForm />
      </Formik>
      <Link to='/register'>Regístrate gratis</Link>
    </div>
  );
};

export default Login;
