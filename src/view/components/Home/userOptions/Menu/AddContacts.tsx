import { Formik, Form } from 'formik';
import TextField from '../../../common/TextField';
import { NewContact } from '../../../../../types';
import { VALIDATE_ADD_CONTACT } from '../../../../../model/validations';
import Button from 'react-bootstrap/Button';
import { addContactHandler } from '../../../../../controller/handlers';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuView } from '../../../../../controller/features';
import { getOne } from '../../../../../model/db/services';

const INITIAL_VALUES: NewContact = {
  contact: '',
  cel: '',
};

const AddContacts: React.FunctionComponent = (props) => {
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentUser
  );
  const dispatch = useDispatch();

  const updateCurrentUser = async () => {
    await getOne('users', currentUser.id);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATE_ADD_CONTACT}
      onSubmit={async (values) => {
        addContactHandler(values, currentUser, updateCurrentUser);
      }}
    >
      <Form className='p-5 d-flex flex-column'>
        <TextField label='Nombre de contacto' name='contact' type='text' />
        <TextField label='Celular' name='cel' type='number' />
        <div className='mt-4 d-flex justify-content-evenly'>
          <Button
            variant='outline-info'
            onClick={() => dispatch(setMenuView('chatHistory'))}
          >
            Cancelar
          </Button>
          <Button type='submit'>Crear</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddContacts;
