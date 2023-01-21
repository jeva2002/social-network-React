import { useField } from 'formik';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

interface Props {
  label: string;
  name: string;
  type: string;
}

const TextField: React.FunctionComponent<Props> = ({ label, name, type }) => {
  const [field, meta] = useField(name);

  return (
    <Form.Group className='mb-3'>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...field} type={type} placeholder={label} />
      {meta.touched && meta.error ? (
        <div className='error ms-3'>{meta.error}</div>
      ) : null}
    </Form.Group>
  );
};

export default TextField;
