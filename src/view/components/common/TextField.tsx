import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

interface TextArea {
  as: string;
  row?: number;
}

interface Props {
  label: string;
  name: string;
  type: string;
  isTextArea?: TextArea;
}

const TextField: React.FunctionComponent<Props> = ({
  label,
  name,
  type,
  isTextArea,
}) => {
  const [field, meta] = useField(name);
  
  const textArea = isTextArea ?? {};

  return (
    <Form.Group className='mb-3'>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        type={type}
        placeholder={label}
        {...textArea}
      />
      {meta.touched && meta.error ? (
        <div className='error ms-3'>{meta.error}</div>
      ) : null}
    </Form.Group>
  );
};

export default TextField;
