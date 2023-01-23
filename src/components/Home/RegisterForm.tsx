import { Form } from 'formik';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '../common/TextField';

interface IRegisterFormProps {}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  return (
    <Form className='bg-light p-5 mw-100 d-flex flex-column gap-1' style={{ borderRadius: 10 }}>
      <TextField label='Name' name='name' type='text' />
      <TextField label='Cell Phone' name='cel' type='number' />
      <TextField label='Password' name='password' type='password' />
      <TextField label='Profile Pic' name='profileImg' type='url' />
      <TextField
        label='Description'
        name='description'
        type='text'
        isTextArea={{ as: 'textarea' }}
      />
      <div className='d-flex gap-5 px-md-5 px-0 py-2'>
        <Button variant='outline-success'>Cancelar</Button>
        <Button type='submit'>Crear</Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
