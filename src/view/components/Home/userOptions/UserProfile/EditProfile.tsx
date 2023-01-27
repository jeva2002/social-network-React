import { Form, Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { updateCurrentUser } from '../../../../../controller/handler';
import { CurrentUserData } from '../../../../../model/types';
import { VALIDATE_UPDATE_CURRENT_USER } from '../../../../../model/validations';
import TextField from '../../../common/TextField';

interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ValuesUpdateUser {
  profileImg: string;
  firstname: string;
  lastname: string;
  description: string;
}

const EditProfile: React.FunctionComponent<Props> = ({ edit, setEdit }) => {
  const currentUser: CurrentUserData = useSelector(
    (state: any) => state.currentUser.currentUser
  );

  const INITIAL_VALUES: ValuesUpdateUser = {
    profileImg: currentUser.profileImg,
    firstname: currentUser.firstname,
    lastname: currentUser.lastname,
    description: currentUser.description,
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATE_UPDATE_CURRENT_USER}
      onSubmit={(values) => {
        updateCurrentUser(currentUser.id, values)
      }}
    >
      <Form className='p-md-5 p-2'>
        <TextField label='Foto de perfil' name='profileImg' type='url' />
        <div className='d-flex gap-2'>
          <TextField label='Nombre' name='firstname' type='text' />
          <TextField label='Apellido' name='lastname' type='text' />
        </div>
        <TextField
          label='Descripción'
          name='description'
          type='text'
          isTextArea={{ as: 'textarea' }}
        />
        <div className='d-flex justify-content-evenly gap-2'>
          <Button variant='outline-info' onClick={() => setEdit(false)}>Cancelar</Button>
          <Button type='submit'>Actualizar</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditProfile;
