import { Form } from 'formik';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '../common/TextField';

const RegisterForm: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Form
      className='bg-light p-5 mw-100 d-flex flex-column gap-1'
      style={{ borderRadius: 10 }}
    >
      <div className='d-flex gap-2'>
        <TextField label='Nombre' name='firstname' type='text' />
        <TextField label='Apellidos' name='lastname' type='text' />
      </div>
      <TextField label='Correo electrónico' name='email' type='email' />
      <div className='d-flex gap-2'>
        <TextField label='Celular' name='cel' type='number' />
        <TextField label='Contraseña' name='password' type='password' />
      </div>
      <TextField label='Foto de perfil' name='profileImg' type='url' />
      <TextField
        label='Description'
        name='description'
        type='text'
        isTextArea={{ as: 'textarea' }}
      />
      <div className='d-flex gap-5 px-md-5 px-0 py-2'>
        <Button variant='outline-success' onClick={() => navigate('/')}>
          Cancelar
        </Button>
        <Button type='submit'>Crear</Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
