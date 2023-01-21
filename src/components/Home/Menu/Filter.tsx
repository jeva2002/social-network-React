import Form from 'react-bootstrap/Form';
import search from '../../../assets/search.svg';

interface IFilterProps {}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  return (
    <Form className='d-flex p-4 position-relative align-items-center' style={{
      backgroundColor: '#f6f6f6'
    }}>
      <span className='position-absolute ms-2'>
        <img src={search} alt='Buscar' />
      </span>
      <Form.Control
        className='p-3 ps-5'
        placeholder='Buscar o iniciar un nuevo chat'
        style={{ borderRadius: 30 }}
      />
    </Form>
  );
};

export default Filter;
