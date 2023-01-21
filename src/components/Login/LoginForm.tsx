import {
  useState,
  useEffect,
} from 'react';

import { User } from '../../functions/services/types';
import { Formik, Form } from 'formik';
import { handleLogin, VALIDATE_LOGIN } from '../../functions/controller';
import TextField from '../common/TextField';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FunctionComponent<{
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}> = ({ setUser }) => {
  const [auth, isAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/home');
    }
  }, [auth, navigate]);

  if (isAuth) {
    return (
      <Formik
        initialValues={{
          cel: '',
          password: '',
        }}
        validationSchema={VALIDATE_LOGIN}
        validate={() => {}}
        onSubmit={async (values, actions) => {
          const user = await handleLogin(parseInt(values.cel), values.password);
          if (user) {
            setUser(user);
            isAuth(!auth);
          }
        }}
      >
        <Form
          className='col-4 px-4 py-5 d-flex flex-column'
          style={{
            backgroundColor: '#efefef',
            borderRadius: 10,
          }}
        >
          <TextField label='Número de Celular' name='cel' type='number' />
          <TextField label='Contraseña' name='password' type='password' />
          <Button className='col-4 mt-3 align-self-center' type='submit'>
            Ingresar
          </Button>
        </Form>
      </Formik>
    );
  } else return null;
};

export default LoginForm;
