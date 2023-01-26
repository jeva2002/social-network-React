import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import search from '../../../../../assets/search.svg';

interface Props {

}

const Filter: React.FunctionComponent<Props> = ({  }) => {
  const [input, setInput] = useState('');

  return (
    <div
      className='d-flex m-0 p-4 position-relative align-items-center'
      style={{
        backgroundColor: '#f6f6f6',
      }}
    >
      <span className='position-absolute ms-2'>
        <img src={search} alt='Buscar' />
      </span>
      <Form.Control
        className='pe-3 ps-5 py-2'
        placeholder='Buscar o iniciar un nuevo chat'
        style={{ borderRadius: 30 }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
