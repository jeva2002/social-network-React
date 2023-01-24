import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Register/RegisterForm';
import { handleRegister } from '../functions/controller';
import { VALIDATE_REGISTER } from '../functions/controller/domain';
import { User } from '../functions/controller/domain/types';

const INITIAL_VALUES: User = {
  firstname: '',
  lastname: '',
  email: '',
  cel: '',
  password: '',
  description: '',
  profileImg: '',
};

const Register: React.FunctionComponent = (props) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATE_REGISTER}
      onSubmit={(values) => handleRegister(values)}
    >
      <div
        className='d-flex align-items-center justify-content-center'
        style={{
          minHeight: '100vh',
          backgroundColor: '#d1e4bc',
        }}
      >
        <RegisterForm />
      </div>
    </Formik>
  );
};

export default Register;
