import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import search from '../../../assets/search.svg';

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FunctionComponent<Props> = ({ setFilter }) => {
  const [input, setInput] = useState('')

  return (
    <Form
      className='d-flex p-4 position-relative align-items-center'
      style={{
        backgroundColor: '#f6f6f6',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        setFilter(input);
      }}
    >
      <span className='position-absolute ms-2'>
        <img src={search} alt='Buscar' />
      </span>
      <Form.Control
        className='p-3 ps-5'
        placeholder='Buscar o iniciar un nuevo chat'
        style={{ borderRadius: 30 }}
        name='search'
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </Form>
  );
};

export default Filter;
