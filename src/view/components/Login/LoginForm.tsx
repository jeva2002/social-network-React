import { Form } from "formik";
import TextField from "../common/TextField";
import Button from "react-bootstrap/Button";

const LoginForm: React.FunctionComponent = () => {
  return (
    <Form
      className='col-md-4 col-11 px-md-5 px-4 py-5 d-flex flex-column'
      style={{
        backgroundColor: '#efefef',
        borderRadius: 10,
      }}
    >
      <TextField label='Correo Electrónico' name='email' type='email' />
      <TextField label='Contraseña' name='password' type='password' />
      <Button className='col-4 mt-3 align-self-center' type='submit'>
        Ingresar
      </Button>
    </Form>
  );
};

export default LoginForm;
