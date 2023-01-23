import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/Home/RegisterForm';
import { handleRegister } from '../functions/controller';
import { VALIDATE_REGISTER } from '../functions/controller/formValidations';
import { IValues } from '../functions/services/types';

const INITIAL_VALUES: IValues = {
  name: '',
  cel: '',
  password: '',
  profileImg: '',
  description: '',
};

const Register: React.FunctionComponent = (props) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATE_REGISTER}
      onSubmit={(values) => {
        handleRegister(values);
        navigate('/');
      }}
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
